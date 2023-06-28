import React from "react";
import Link from "next/link";
import Image from "next/image";
import KyraLogo from "@/assets/svg/kyra-logo-black.svg";
import styles from "./Footer.module.scss";

interface FooterProps {
  primary?: boolean;
}

export const Footer = ({ primary = false }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <menu className={styles.footerNav}>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="mailto:support@kyra.com">Support</Link>
          </li>
          <li>
            <Link href="/fastest-growing-tiktok">Fastest Growing</Link>
          </li>
        </menu>
        <p>&copy; {currentYear} Kyra. All rights reserved.</p>
        <Image src={KyraLogo} alt="Kyra" className={styles.footerLogo} />
      </div>
    </footer>
  );
};
