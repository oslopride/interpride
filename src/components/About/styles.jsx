import styled from "styled-components";

export const About = styled.div`
	margin: 2rem 1rem;

	div:first-child {
		margin: 0 auto;
		max-width: 1200px;

		@media (min-width: 920px) {
			display: flex;
			flex-flow: row wrap;
		}
	}
`;

export const Image = styled.div`
	margin-bottom: 1.25rem;

	@media (min-width: 920px) {
		width: 50%;
	}

	img {
		object-fit: cover;
		max-width: 100%;
		height: auto;

		@media (min-width: 920px) {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
`;

export const Text = styled.div`
	@media (min-width: 920px) {
		flex: 1;
		margin-left: 5rem;
	}

	h2 {
		font-family: Montserrat;
		color: #c63e3a;

		@media (min-width: 920px) {
			font-size: 2rem;
			line-height: 1.3;
		}
	}

	p {
		font-family: Open Sans;
		font-size: 1.1rem;
		margin-bottom: 1.3rem;
	}

	a {
		color: black;
	}
`;

export const Button = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding: 0.8em;
	border: 2px solid white;
	border-radius: 8px;
	background-color: #c63e3a;
	appearance: none;
	cursor: pointer;

	a {
		font-family: Open Sans;
		font-size: 0.95rem;
		font-weight: 500;
		text-decoration: none;
		text-transform: uppercase;
		color: white;
	}
`;