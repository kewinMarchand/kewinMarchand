import React from "react";
import "../public/styles/app.css";

export default function MyApp ({ Component, pageProps }): React.ReactElement {
  return <Component {...pageProps} />;
}
