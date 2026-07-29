import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function FadeIn({ children, delay = 0, className, id }: { children: ReactNode; delay?: number; className?: string; id?: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40, rotateX: 10, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        delay, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}
