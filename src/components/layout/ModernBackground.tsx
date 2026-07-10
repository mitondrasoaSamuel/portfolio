import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ModernBackground() {
  const meshRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const lastEventRef = useRef<MouseEvent | null>(null);

  useEffect(() => {
    gsap.to(meshRef.current, {
      y: "+=20",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const updateFromMouse = () => {
      rafRef.current = null;
      const e = lastEventRef.current;
      if (!e || !glowRef.current || !meshRef.current) return;

      const target = e.target as Element | null;
      if (target?.closest(".contact-form-card, input, textarea, button, select")) {
        return;
      }

      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(glowRef.current, {
        x: clientX,
        y: clientY,
        duration: 2.5,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(meshRef.current, {
        rotateX: 70 - yPos / 3,
        rotateY: xPos / 3,
        duration: 3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastEventRef.current = e;
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(updateFromMouse);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="modern-bg">
      <div
        ref={glowRef}
        className="absolute w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <div
        ref={meshRef}
        className="absolute inset-0 opacity-30 origin-center scale-[1.7]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
          transform: "perspective(1200px) rotateX(70deg) translateY(-300px)",
          maskImage:
            "radial-gradient(circle at 50% 50%, black 10%, transparent 90%)",
        }}
      />

      <div className="aurora-blur bg-emerald-500/10 top-[-20%] left-[-10%] w-[1000px] h-[1000px] animate-[float_30s_infinite_ease-in-out]" />
      <div className="aurora-blur bg-cyan-500/5 bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] animate-[float_35s_infinite_ease-in-out_reverse]" />

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
    </div>
  );
}
