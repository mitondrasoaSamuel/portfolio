import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import type { ContactPayload } from "./contact.dto.js";

const PORTFOLIO_LABEL = "Portfolio Samuel Frédéric";
const SUBJECT_PREFIX = `[${PORTFOLIO_LABEL}]`;

let transporter: Transporter | null = null;

function getSmtpPassword() {
  const raw = process.env.SMTP_PASS?.trim().replace(/^"|"$/g, "") ?? "";
  return raw.replace(/\s+/g, "");
}

function createTransporter() {
  const user = process.env.SMTP_USER?.trim();
  const pass = getSmtpPassword();

  if (!user || !pass) {
    throw new Error("SMTP credentials are not configured");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    requireTLS: true,
    pool: true,
    maxConnections: 1,
    auth: { user, pass },
  });
}

function getTransporter() {
  if (!transporter) {
    transporter = createTransporter();
  }
  return transporter;
}

function resetTransporter() {
  transporter?.close();
  transporter = null;
}

export async function verifySmtpConnection() {
  await getTransporter().verify();
}

function buildSubject(name: string) {
  return `${SUBJECT_PREFIX} Nouveau contact · ${name}`;
}

function buildTextBody(payload: ContactPayload) {
  return [
    `${PORTFOLIO_LABEL} — Formulaire de contact`,
    "─".repeat(40),
    "",
    `Nom    : ${payload.name}`,
    `Email  : ${payload.email}`,
    "",
    "Message :",
    payload.message,
    "",
    "─".repeat(40),
    "Répondez à cet email pour contacter directement l'expéditeur.",
    `Source : formulaire de contact de ${PORTFOLIO_LABEL}.`,
  ].join("\n");
}

function buildHtmlBody(payload: ContactPayload) {
  const messageHtml = escapeHtml(payload.message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:24px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e4e4e7;border-radius:8px;">
          <tr>
            <td style="padding:24px 28px;border-bottom:1px solid #e4e4e7;">
              <p style="margin:0 0 4px;font-size:12px;font-weight:bold;letter-spacing:0.08em;text-transform:uppercase;color:#059669;">
                ${escapeHtml(PORTFOLIO_LABEL)}
              </p>
              <h1 style="margin:0;font-size:20px;font-weight:bold;color:#18181b;">
                Nouveau message de contact
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#3f3f46;">
                Quelqu'un a rempli le formulaire de contact de votre portfolio.
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                <tr>
                  <td style="padding:6px 0;color:#71717a;width:80px;vertical-align:top;">Nom</td>
                  <td style="padding:6px 0;color:#18181b;font-weight:bold;">${escapeHtml(payload.name)}</td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:#71717a;vertical-align:top;">Email</td>
                  <td style="padding:6px 0;">
                    <a href="mailto:${escapeHtml(payload.email)}" style="color:#059669;text-decoration:none;">
                      ${escapeHtml(payload.email)}
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:20px 0 8px;font-size:13px;font-weight:bold;color:#71717a;">Message</p>
              <div style="padding:16px;background:#fafafa;border:1px solid #e4e4e7;border-radius:6px;font-size:14px;line-height:1.6;color:#18181b;">
                ${messageHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;border-top:1px solid #e4e4e7;font-size:12px;line-height:1.5;color:#a1a1aa;">
              Répondez à cet email pour contacter ${escapeHtml(payload.name)} directement.<br>
              Envoyé automatiquement depuis le formulaire de contact de ${escapeHtml(PORTFOLIO_LABEL)}.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendContactEmail(payload: ContactPayload) {
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const to = process.env.MAIL_TO;
  const fromName = process.env.MAIL_FROM_NAME?.trim() || PORTFOLIO_LABEL;

  if (!from || !to) {
    throw new Error("MAIL_FROM and MAIL_TO must be configured");
  }

  const mailOptions = {
    from: `"${fromName}" <${from}>`,
    to,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: buildSubject(payload.name),
    text: buildTextBody(payload),
    html: buildHtmlBody(payload),
    headers: {
      "X-Portfolio-Contact": "portfolio-samuel",
      "X-Auto-Response-Suppress": "All",
    },
  };

  try {
    await getTransporter().sendMail(mailOptions);
  } catch {
    resetTransporter();
    await getTransporter().sendMail(mailOptions);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
