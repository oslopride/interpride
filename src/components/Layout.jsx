import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, locale }) {
	return (
		<>
			<Header locale={locale} />
			{children}
			<Footer />
		</>
	);
}
