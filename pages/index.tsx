import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Index = () => (
  <div>
    <header>
      <Logo />
      <Navigation />
    </header>

    <div>
      <div>
        <h1>1 - 4 October 2020</h1>
        <h1>Oslo, Norway</h1>
      </div>

      <div>
        <div>
          <h2>Workshops</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <h2>Tickets</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div>
          <h2>The Bid</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>

    <div>
      <img
        src="https://placeimg.com/640/480/nature/grayscale"
        alt="Interpride illustation"
      />
      <div>
        <h2>What is Interpride AGM?</h2>
        <p>Lorem ipsum</p>
      </div>
    </div>

    <footer>Footer</footer>
  </div>
);

export default Index;
