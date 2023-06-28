import NextTopLoader from "nextjs-toploader";
import clsx from "clsx";
import { Header } from "@/ui/organisms";
import { CookieBanner } from "@/ui/molecules";
import GoogleAnalytics from "components/GoogleAnalytics";
import * as utils from "@/utils/fonts";
import "@/styles/styles.scss";
import styles from "./layout.module.scss";

export const metadata = {
  colorScheme: "dark",
  creator: "Kyra",
  manifest: "/manifest.json",
  itunes: {
    appId: "1645323967",
  },
};

export default function CreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClasses = clsx(
    styles.kyraBody,
    styles.dark,
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
      <GoogleAnalytics GA_MEASUREMENT_ID="G-EQE842Y1ZY" />
      <body className={bodyClasses}>
        <NextTopLoader
          color="var(--color-primary)"
          showSpinner={false}
          height={4}
          shadow={false}
        />
        <Header secondary />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
