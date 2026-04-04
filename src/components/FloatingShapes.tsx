import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const shapes = [
  { size: 300, x: "10%", y: "15%", delay: 0 },
  { size: 200, x: "75%", y: "20%", delay: 1 },
  { size: 150, x: "60%", y: "70%", delay: 2 },
  { size: 250, x: "20%", y: "80%", delay: 0.5 },
  { size: 180, x: "85%", y: "55%", delay: 1.5 },
  { size: 120, x: "40%", y: "40%", delay: 2.5 },
];

const FloatingShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, i) => {
        const parallaxX = useTransform(mouseX, [-1, 1], [-30 * (i + 1), 30 * (i + 1)]);
        const parallaxY = useTransform(mouseY, [-1, 1], [-20 * (i + 1), 20 * (i + 1)]);

        return (
          <motion.div
            key={i}
            className="floating-shape"
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y,
              x: parallaxX,
              y: parallaxY,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" },
              delay: shape.delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingShapes;
