import React from "react";
import * as S from "./styles";
import ReactSVG from "react-svg";

const VenueHero = () => {
	return (
		<S.VenueHero>
			<img src="/clarion-hotel-oslo.jpg" alt="Hotel illustration" />
			<ul>
				<li>
					<a
						href="https://www.google.com/maps/?q=59.9078,10.7564272"
						aria-label="Google maps"
					>
						<ReactSVG src="/icon-map.svg" wrapper="span" />
						Dronning Eufemias Gate 15
					</a>
				</li>
				<li>
					<a
						href="https://www.nordicchoicehotels.com/hotels/norway/oslo/clarion-hotel-oslo/"
						aria-label="The hotel website"
					>
						<ReactSVG src="/icon-launch.svg" wrapper="span" />
						Hotel website
					</a>
				</li>
			</ul>
		</S.VenueHero>
	);
};

export default VenueHero;
