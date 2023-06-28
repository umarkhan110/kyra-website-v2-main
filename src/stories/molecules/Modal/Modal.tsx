"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import styles from "./Modal.module.scss";

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  modalContent?: React.ReactNode;
}

export const Modal = ({ showModal, closeModal, modalContent }: ModalProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalInnerElement = document.querySelector(`.${styles.modalInner}`);
      if (
        modalInnerElement &&
        !modalInnerElement.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal, closeModal]);

  const handleButtonClick = () => {
    closeModal();
  };

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
    hidden: { opacity: 0, y: 0, scale: 0.85 },
    closed: { opacity: 0, y: 0, scale: 0.85 },
  };

  return (
    <>
      {showModal && (
        <motion.div
          initial={showModal ? "hidden" : "closed"}
          animate={showModal ? "visible" : "closed"}
          variants={variants}
          className={styles.modalOuter}
        >
          <div className={styles.modalInner}>
            <button className={styles.closeModal} onClick={handleButtonClick}>
              <FiX />
            </button>
            <div className={styles.modalContent}>{modalContent}</div>
          </div>
        </motion.div>
      )}
    </>
  );
};
