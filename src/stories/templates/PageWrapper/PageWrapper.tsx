"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/ui/organisms";

import styles from "./PageWrapper.module.scss";
interface PageWrapperProps {
  children: React.ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    duration: 3,
  },
  in: {
    opacity: 1,
    y: 0,
    duration: 3,
  },
  out: {
    opacity: 0,
    y: 20,
    duration: 3,
  },
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        className={styles.main}
      >
        {children}
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};
