import { motion, useScroll, useTransform } from "motion/react";
import { useTranslation } from "react-i18next";
import photoSam from "../../assets/images/photoSam.png";
import { profile } from "../../data/profile";
import { useTypewriter } from "../../hooks/useTypewriter";
import SocialLinks from "../ui/SocialLinks";
import TiltCard from "../ui/TiltCard";

export default function HeroSection() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 150]);
  const typedText = useTypewriter(t("hero.mainTitle"));

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] md:pt-14 flex items-center justify-center overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ opacity, y }}
          className="text-left"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.85] tracking-tighter mb-6 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            {profile.firstName.toUpperCase()} <br />
            {profile.lastName.toUpperCase()}
          </h1>

          <div className="min-h-[4rem] mb-6">
            <h2 className="text-xl md:text-2xl font-display font-light text-white/60 tracking-tight">
              {typedText}
              <span className="inline-block w-0.5 h-6 bg-emerald-500 animate-pulse ml-1" />
            </h2>
          </div>

          <p className="text-gray-500 text-base max-w-md mb-10 leading-relaxed font-light">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm tracking-tight transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              {t("hero.cta_projects")}
            </motion.a>
            <motion.a
              href={profile.cvPath}
              download={profile.cvDownloadName}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/10 text-white px-10 py-4 rounded-full font-bold text-sm tracking-tight backdrop-blur-sm"
            >
              {t("hero.cta_cv")}
            </motion.a>
          </div>

          <SocialLinks />
        </motion.div>

        <div className="relative hidden lg:block perspective-1000">
          <TiltCard className="relative z-10 overflow-hidden rounded-3xl p-2">
            <div className="overflow-hidden aspect-[4/5] max-w-[450px] mx-auto border-white/5 relative isolate">
              <img
                src={photoSam}
                alt={profile.displayName}
                className="block h-full w-full object-cover grayscale opacity-80 transform-[translateZ(0)] backface-hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                  <span>{t("hero.portrait_overlay")}</span>
                  <span>v2.0</span>
                </div>
              </div>
            </div>
          </TiltCard>

          <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-emerald-500/20 rounded-tl-3xl" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-cyan-500/20 rounded-br-3xl" />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
