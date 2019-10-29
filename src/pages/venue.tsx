import React from "react";
import { Link } from "gatsby";
import PageTitle from "../components/PageTitle";
import * as S from "../components/PageContent";
import VenueHero from "../components/VenueHero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Venue = () => (
	<>
		<Header />
		<PageTitle title="Clarion Hotel Oslo"></PageTitle>
		<VenueHero />
		<S.PageContent>
			<div>
				<p>
					The hotel is located in the city center just a few steps from the
					Central Station, next to the Oslo Opera House and the Oslofjord, where
					the delegates will arrive from the airport within 19 minutes on the
					Airport Express Train. All the LGBTQI establishments in Oslo are
					within walking distance of the conference hotel. Choice Hotel Bjørvika
					is brand new, and opens in April 2019.
				</p>
				<h2>Food</h2>
				<p>
					Norwegian hotels are famous for their breakfasts. You may choose
					between a variety of different options, from full English breakfast to
					a light French breakfast or a traditional Norwegian breakfast. There
					is also a variety of vegetarian and vegan options to choose from.
				</p>
				<p>Lunch and dinner are included in the registration fee.</p>
				<h2>Conference Facilities</h2>
				<p>
					The conference venue includes a plenary room with a capacity of 380
					people, 3 meetings rooms with a capacity of 60 people, 4 rooms with a
					capacity of 40 people and 4 board rooms with a capacity of 20 people.
				</p>
				<p>
					All conference venues are wheelchair friendly. Internet is free for
					all conference attendees.
				</p>
				<h2>Pricing</h2>
				<p>
					1,590 NOK (USD 199) for a double room per night including breakfast
					(taxes included). Head over to{" "}
					<Link to="/registration">the registration page</Link> to see what{"'"}
					s included in the registration fee.
				</p>
			</div>
		</S.PageContent>
		<Footer />
	</>
);

export default Venue;
