// components/ScrollReveal.js

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const ScrollLayout = ({
  threshold = 0.2,
  children,
  x = -150,
  y = 0,
  duration = 1,
  opacity = 1,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, x: x }}
      whileInView={{ opacity: opacity, y: y, x: 0 }}
      transition={{ duration: duration, ease: "easeOut" }}
      className="your-tailwind-classes"
    >
      {children}
    </motion.div>
  );
};

export default ScrollLayout;
