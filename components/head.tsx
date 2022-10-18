import React from "react";
import NextHead from "next/head";

const Head = () => {
  return (
    <NextHead>
      <title>More Coffee</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="More Coffee - Buca/İzmir " />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="coffee" />
      <meta property="og:title" content="More Coffee" />
      <meta property="og:description" content="More Coffee - Buca/İzmir" />
      <meta property="og:image" content="/assets/more_coffee_logo.jpeg" />
      <meta property="og:url" content="PERMALINK" />
      <meta property="og:site_name" content="More Coffee" />
    </NextHead>
  );
};

export default Head;
