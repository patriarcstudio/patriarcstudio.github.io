import React from "react";
import { ReactComponent } from "@/utils/types";
import { Footer } from "./footer";
import Head from "next/head";

interface Props {
  title?: string;
  description?: string;
}

export const Layout: ReactComponent<Props> = ({
  children,
  title,
  description,
}) => {
  title = title || "Patriarc Architecture Studio";
  description =
    description ||
    "Leading architecture firm with solid design and architecture expertise. We design residential, commercial, interior projects & much more.";

  let image =
    "https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/patriac_logo_with_bg.png";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={image} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
      </Head>
      {children}
      <Footer />
    </div>
  );
};
