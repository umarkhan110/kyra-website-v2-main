"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "./HubspotFormCreators.module.scss";

export const HubspotFormCreators = () => {
  const [httpState, setHttpState] = useState({
    processing: false,
    status: null as number | null,
  });

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setHttpState({ ...httpState, processing: true });

    const firstnameInput = (event.target as HTMLFormElement).elements.namedItem(
      "firstname"
    ) as HTMLInputElement;
    const emailInput = (event.target as HTMLFormElement).elements.namedItem(
      "email"
    ) as HTMLInputElement;
    const tiktokInput = (event.target as HTMLFormElement).elements.namedItem(
      "tiktok_handle"
    ) as HTMLInputElement;
    const fields = [
      {
        name: "email",
        value: emailInput.value,
      },
      {
        name: "firstname",
        value: firstnameInput.value,
      },
      {
        name: "tiktok_handle",
        value: tiktokInput.value,
      },
    ];

    const response = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/8473208/2d2e5813-c1a5-42fc-b3f1-997213b1bf7a",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields }),
      }
    );

    setHttpState({ processing: false, status: response.status });
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -30 },
  };

  const renderForm = () => {
    if (httpState.status === 200) {
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
          className={styles.response}
        >
          Thanks, you&apos;re signed up 👍
        </motion.div>
      );
    } else if (httpState.status === 404) {
      return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
          className={styles.response}
        >
          Oops, something went wrong! 🤷
        </motion.div>
      );
    }

    return (
      <form className={styles.form} onSubmit={onSubmit}>
        <h2>
          creators <b>signup</b>
        </h2>
        <input type="text" name="firstname" placeholder="First name" />
        <input type="email" name="email" placeholder="Your email" required />
        <input type="text" name="tiktok_handle" placeholder="TikTok handle" />

        <input type="submit" value="Signup" className={styles.submit} />
      </form>
    );
  };

  return <div className={styles.formWrapper}>{renderForm()}</div>;
};
