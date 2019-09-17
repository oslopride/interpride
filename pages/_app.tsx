import App from "next/app";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
`;

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
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
