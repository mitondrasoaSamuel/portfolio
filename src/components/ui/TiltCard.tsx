import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Lighter tilt for large cards / forms — no 3D depth layer */
  lightweight?: boolean;
}

const SPRING = { stiffness: 200, damping: 26, mass: 0.5 };

export default function TiltCard({
  children,
  className = "",
  lightweight = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, SPRING);
  const mouseYSpring = useSpring(y, SPRING);

  const maxTilt = lightweight ? 4 : 8;
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${maxTilt}deg`, `-${maxTilt}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${maxTilt}deg`, `${maxTilt}deg`]
  );

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const { clientX, clientY } = e;
    if (rafRef.current !== null) return;

    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((clientX - rect.left) / rect.width - 0.5);
      y.set((clientY - rect.top) / rect.height - 0.5);
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`[perspective:1000px] ${className}`.trim()}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          willChange: "transform",
          ...(lightweight ? {} : { transformStyle: "preserve-3d" }),
        }}
        className="h-full"
      >
        {lightweight ? (
          children
        ) : (
          <div style={{ transform: "translateZ(24px)" }}>{children}</div>
        )}
      </motion.div>
    </div>
  );
}
