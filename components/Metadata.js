import Head from "next/head";
import React from "react";

function Metadata({ title, description }) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <description>{description}</description>}
    </Head>
  );
}

export default Metadata;
