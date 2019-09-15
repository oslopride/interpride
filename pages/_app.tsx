import App from "next/app";
import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default class NextApp extends App {
  componentDidMount() {
    import("webfontloader").then(WebFont => {
      WebFont.load({
        google: {
          families: ["Montserrat:600,700", "Open+Sans:400,400i,700,700i"]
        }
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <header>
          <Logo />
          <Navigation />
        </header>

        <Component {...pageProps} />

        <Footer />
      </>
    );
  }
}
