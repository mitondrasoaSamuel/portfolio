import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { contactSchema } from "./contact.dto.js";
import { sendContactEmail, verifySmtpConnection } from "./mail.service.js";

dotenv.config();

const app = express();
const API_PORT = Number(process.env.API_PORT || 3002);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    console.error("Contact validation error:", parsed.error.flatten().fieldErrors);
    return res.status(400).json({
      success: false,
      message: "Invalid form data",
      errors: parsed.error.flatten().fieldErrors,
    });
  }

  try {
    await sendContactEmail(parsed.data);
    return res.json({ success: true, message: "Email sent" });
  } catch (error) {
    const smtpError = error as { code?: string };
    console.error("Contact email error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send email",
      code: smtpError.code === "EAUTH" ? "smtp_auth" : "smtp_error",
    });
  }
});

if (process.env.NODE_ENV === "production") {
  const distPath = path.join(__dirname, "../dist");
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(API_PORT, () => {
  console.log(`API server running on http://localhost:${API_PORT}`);
  verifySmtpConnection()
    .then(() => console.log(`SMTP ready (${process.env.SMTP_USER})`))
    .catch((err: Error) =>
      console.error("SMTP not ready — contact form will fail:", err.message)
    );
});
