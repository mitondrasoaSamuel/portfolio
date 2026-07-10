import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { Send, Phone, Mail, ArrowUpRight, Loader2 } from "lucide-react";
import { profile } from "../../data/profile";
import TiltCard from "../ui/TiltCard";

type FormStatus = "idle" | "loading" | "success" | "error";
type ErrorType = "generic" | "validation" | "config";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ERROR_I18N_KEYS: Record<ErrorType, string> = {
  generic: "contact.error",
  validation: "contact.validation_error",
  config: "contact.config_error",
};

export default function ContactSection() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorType, setErrorType] = useState<ErrorType>("generic");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorType("generic");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setErrorType("validation");
      setStatus("error");
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrorType("config");
      setStatus("error");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: trimmedName, email: trimmedEmail, message: trimmedMessage },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto min-w-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <div className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">
              {t("nav.contact")}
            </div>
            <h2 className="text-[2.35rem] leading-[0.92] sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter mb-8 sm:mb-10 break-words">
              {t("contact.headline_before")}
              <span className="text-gray-500 block sm:inline">
                {t("contact.headline_accent")}
              </span>
            </h2>

            <div className="space-y-10 sm:space-y-12 mt-10 sm:mt-20">
              <a href={`mailto:${profile.email}`} className="group block min-w-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4 flex items-center gap-2 group-hover:text-emerald-500 transition-colors">
                  <Mail size={12} /> {t("contact.email")}
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl font-display font-medium border-b border-white/10 pb-4 flex items-start sm:items-center justify-between gap-3 min-w-0 group-hover:border-emerald-500/50 transition-colors">
                  <span className="min-w-0 break-all sm:break-words">
                    {profile.email}
                  </span>
                  <ArrowUpRight className="shrink-0 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>

              <a
                href={`https://wa.me/${profile.phoneWhatsApp}`}
                className="group block min-w-0"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-600 mb-4 flex items-center gap-2 group-hover:text-emerald-500 transition-colors">
                  <Phone size={12} /> {t("contact.whatsapp")}
                </div>
                <div className="text-lg sm:text-2xl md:text-3xl font-display font-medium border-b border-white/10 pb-4 flex items-center justify-between gap-3 min-w-0 group-hover:border-emerald-500/50 transition-colors">
                  <span className="min-w-0">{profile.phoneDisplay}</span>
                  <ArrowUpRight className="shrink-0 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </a>
            </div>
          </motion.div>

          <div className="relative contact-form-card min-w-0">
            <TiltCard lightweight>
              <div className="p-1 rounded-3xl border border-white/10 bg-[#0a0a0a]/95 shadow-xl shadow-black/30">
                <div className="p-6 sm:p-10 rounded-[calc(1.5rem-4px)]">
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-name"
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1"
                      >
                        {t("contact.name")}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("contact.name")}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-emerald-500 focus:outline-none transition-colors placeholder:text-gray-800 text-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-email"
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1"
                      >
                        {t("contact.email")}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("contact.email")}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-emerald-500 focus:outline-none transition-colors placeholder:text-gray-800 text-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <label
                        htmlFor="contact-message"
                        className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 ml-1"
                      >
                        {t("contact.message")}
                      </label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t("contact.message")}
                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-emerald-500 focus:outline-none transition-colors placeholder:text-gray-800 text-lg resize-none"
                      />
                    </div>

                    {status === "success" && (
                      <p className="text-sm text-emerald-500">{t("contact.success")}</p>
                    )}
                    {status === "error" && (
                      <p className="text-sm text-red-400">{t(ERROR_I18N_KEYS[errorType])}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex w-full sm:w-auto items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest bg-white text-black px-8 sm:px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === "loading" ? t("contact.sending") : t("contact.send")}
                      {status === "loading" ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send
                          size={16}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </TiltCard>

            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.1)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute -z-10 -bottom-20 -left-20 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
