"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "@/ui/atoms";
import styles from "./CookieBanner.module.scss";

export function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  const cookieBannerClasses = clsx(styles.cookieBanner, {
    [styles.hidden]: cookieConsent !== null,
    [styles.flex]: cookieConsent === null,
  });

  return (
    <div className={cookieBannerClasses}>
      <div className={styles.text}>
        <p>
          We use
          <Link href="/privacy">cookies</Link> on our site.
        </p>
      </div>

      <div className={styles.buttons}>
        <Button
          size="small"
          color="light-text"
          onClick={() => setCookieConsent(false)}
          label="Decline"
        />
        <Button
          size="small"
          color="default"
          onClick={() => setCookieConsent(true)}
          label="Allow"
        />
      </div>
    </div>
  );
}
