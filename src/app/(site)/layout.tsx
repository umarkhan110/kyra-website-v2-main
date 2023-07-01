'use client';

import { useState, Suspense } from 'react';
import NextTopLoader from "nextjs-toploader";
import clsx from "clsx";
import * as utils from "@/utils/fonts";
import { Header } from "@/ui/organisms";
import { CookieBanner } from "@/ui/molecules";
import GoogleAnalytics from "components/GoogleAnalytics";

import "@/styles/styles.scss";
import styles from "./layout.module.scss";

export const metadata = {
  title: "Kyra - The home of creators",
  description:
    "Our mission is to empower and inspire a new generation of creators.",
  colorScheme: "dark",
  creator: "Kyra",
  manifest: "/manifest.json",
  itunes: {
    appId: "1645323967",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = clsx(
    styles.kyraBody,
    utils.kyraregular.variable,
    utils.kyrablack.variable,
    utils.kyrabold.variable,
    utils.kyrabolditalic.variable,
    utils.kyrathin.variable,
    utils.kyraexpandedbold.variable,
    utils.kyraexpandedthin.variable,
    utils.kyraexpandedregular.variable,
    utils.kyraexpandedbolditalic.variable
  );
  return (
    <html lang="en">
      {/* <head>
        <link
          rel="preload"
          // @ts-ignore
          fetchpriority="high"
          as="image"
          href="/images/mobile-video-cover.webp"
          type="image/webp"
        />
      </head> */}
      <GoogleAnalytics GA_MEASUREMENT_ID="G-EQE842Y1ZY" />
      <body className={bodyClasses}>
        <div className={styles.pageWrapper}>
          <Header />
          <Suspense fallback={<p>Fast component loading...</p>}>{children}</Suspense>
         
        </div>
        <CookieBanner />
        <NextTopLoader
          color="var(--color-black)"
          showSpinner={false}
          height={4}
          shadow={false}
        />
      </body>
    </html>
  );
}
