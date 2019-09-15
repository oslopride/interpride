import React from "react";
import Link from "next/link";

const Venue = () => (
  <div>
    <img src="/static/clarion-hotel-oslo.jpg" alt="Hotel illustration" />
    <div>
      <h1>Clarion Hotel Oslo</h1>
      <ul>
        <li>
          <a
            href="https://www.google.com/maps/?q=59.9078,10.7564272"
            aria-label="Google maps"
          >
            Dronning Eufemias Gate 15
          </a>
        </li>
        <li>
          <a
            href="https://www.nordicchoicehotels.com/hotels/norway/oslo/clarion-hotel-oslo/"
            aria-label="The hotel website"
          >
            Hotel website
          </a>
        </li>
      </ul>
      <p>
        The hotel is located in the city center just a few steps from the
        Central Station, next to the Oslo Opera House and the Oslofjord, where
        the delegates will arrive from the airport within 19 minutes on the
        Airport Express Train (included in the conference registration fee). All
        the LGBTQI establishments in Oslo are within walking distance of the
        conference hotel. Choice Hotel Bjørvika is brand new, and opens in April
        2019.
      </p>
      <h2>Food</h2>
      <p>
        Norwegian hotels are famous for their breakfasts. You may choose between
        a variety of different options, from full English breakfast to a light
        French breakfast or a traditional Norwegian breakfast. There is also a
        variety of vegetarian and vegan options to choose from.
      </p>
      <p>Lunch and dinner are included in the registration fee.</p>
      <h2>Conference Facilities</h2>
      <p>
        The conference venue includes a plenary room with a capacity of 380
        people, 3 meetings rooms with a capacity of 60 people, 4 rooms with a
        capacity of 40 people and 4 board rooms with a capacity of 20 people.
      </p>
      <p>
        All conference venues are wheelchair friendly. Internet is free for all
        conference attendees.
      </p>
      <h2>Pricing</h2>
      <p>
        1,590 NOK (USD 199) for a double room per night including breakfast
        (taxes included). Head over to{" "}
        <Link href="/registration">
          <a>the registration page</a>
        </Link>{" "}
        to see what{"'"}s included in the registration fee.
      </p>
    </div>
  </div>
);

export default Venue;
