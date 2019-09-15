import App from "next/app";
import Head from "next/head";
import React from "react";

export default class NextApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            key="google-fonts"
            href="https://fonts.googleapis.com/css?family=Montserrat:600,700|Open+Sans:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
