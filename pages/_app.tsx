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

  #__next {
    display: flex;
    flex-direction: column;
  }

  html, body, #__next {
    height: 100%;
  }

  #content {
    flex: 1 0 auto;
  }

  footer {
    flex-shrink: 0;
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
        <div id="content">
          <Component {...pageProps} />
        </div>
        <Footer />
      </>
    );
  }
}
