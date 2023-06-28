"use client";

import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { Modal } from "@/ui/molecules";
import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  color?: "default" | "dark" | "light-text";
  size?: "large" | "normal" | "small";
  width?: "inline" | "fill";
  label: string;
  link?: any;
  modal?: boolean;
  modalContent?: React.ReactNode;
  onClick?: () => void;
}

type RequiredModalButtonProps = ButtonProps & {
  modal: true;
  modalContent: React.ReactNode; // Required when modal is true
};

export const Button = ({
  color = "default",
  width = "inline",
  size = "normal",
  link,
  label,
  modal = false,
  modalContent,
  ...props
}: ButtonProps | RequiredModalButtonProps) => {
  // Classes
  const buttonClasses = clsx(styles.button, {
    [styles.lg]: size === "large",
    [styles.sm]: size === "small",
    [styles.fill]: width === "fill",
    [styles.dark]: color === "dark",
    [styles.lightText]: color === "light-text",
  });

  // Smooth Scroll
  const scrollRef = useRef();
  const handleAnchorClick = (event: any) => {
    event.preventDefault();

    const targetElement = document.querySelector(link);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 48,
        behavior: "smooth",
      });
    }
  };

  // onClick
  const handleClick = (event: any) => {
    if (props.onClick) {
      event.preventDefault();
      props.onClick();
    }
  };

  // Modal
  const [showModal, setShowModal] = useState(false);

  const handleModalClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      event.preventDefault();
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // If #anchor link return standard <a>
  if (link && link.includes("#")) {
    return (
      <a
        href={link}
        className={buttonClasses}
        {...props}
        onClick={handleAnchorClick}
      >
        <span>{label}</span>
      </a>
    );
  } else if (modal) {
    return (
      <>
        <button className={buttonClasses} {...props} onClick={handleModalClick}>
          <span>{label}</span>
        </button>
        {modal &&
          ReactDOM.createPortal(
            <Modal
              showModal={showModal}
              closeModal={closeModal}
              modalContent={modalContent}
            />,
            document.body
          )}
      </>
    );
  } else {
    return (
      <Link
        {...(link ? { href: link } : { href: "" })}
        className={buttonClasses}
        {...props}
        onClick={handleClick}
      >
        <span>{label}</span>
      </Link>
    );
  }
};

export default Button;
