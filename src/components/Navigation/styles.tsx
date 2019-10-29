import styled from "styled-components";

export const Nav = styled.nav`
	align-items: center;
	margin-top: 0.5rem;
	display: flex;

	ul {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-flow: row wrap;
		padding-left: 0;
		font-size: 0.85rem;
		list-style: none;
		margin: 0;

		@media (min-width: 620px) {
			flex-flow: nowrap;
			margin-left: 0;
		}

		li {
			margin: 0;
			a {
				display: inline-block;
				padding: 0.35rem;
				font-family: Montserrat;
				color: black;
				font-weight: 600;
				text-decoration: none;
				text-transform: uppercase;
				position: relative;

				::before {
					content: "";
					position: absolute;
					left: 50%;
					bottom: 0;
					width: 80%;
					height: 2px;
					background-color: #c63e3a;
					transform-origin: center;
					transform: translate(-50%, 0) scaleX(0);
					transition: transform 0.3s ease-in-out;
				}

				:hover::before {
					transform: translate(-50%, 0) scaleX(1);
				}

				@media (min-width: 620px) {
					padding: 0.5rem 1rem;
					font-size: 1.1rem;
				}
			}
		}
	}
`;
