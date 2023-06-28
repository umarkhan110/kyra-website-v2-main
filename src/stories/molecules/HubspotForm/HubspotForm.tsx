"use client";

import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import styles from "./HubspotForm.module.scss";

export const HubspotForm = () => {
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
    const companynameInput = (
      event.target as HTMLFormElement
    ).elements.namedItem("company") as HTMLInputElement;
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
        name: "company",
        value: companynameInput.value,
      },
    ];

    const response = await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/8473208/b73115dc-d042-4e1a-96b1-1cab25380c13",
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
          brands <b>signup</b>
        </h2>
        <input type="text" name="firstname" placeholder="First name" />
        <input type="email" name="email" placeholder="Your email" required />
        <input type="text" name="company" placeholder="Company name" />

        <input type="submit" value="Signup" className={styles.submit} />
      </form>
    );
  };

  return <div className={styles.formWrapper}>{renderForm()}</div>;
};
