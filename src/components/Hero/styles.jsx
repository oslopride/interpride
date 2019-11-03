import styled from "styled-components";

export const Hero = styled.div`
	color: white;
	background-color: #05264c;
	padding: 4rem 1rem 7rem 1rem;
`;

export const Title = styled.div`
	h1 {
		font-family: Montserrat, sans-serif;
		font-size: 2.5rem;
		text-align: center;

		@media (min-width: 500px) {
			font-size: 3rem;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
	margin-top: 5rem;
	text-align: center;

	@media (min-width: 900px) {
		margin-top: 7rem;
	}
`;

export const ContentBox = styled.div`
	margin: 1rem;
	max-width: 340px;
	line-height: 1.5;

	strong {
		color: #fec101;
	}

	a {
		color: white;
	}
`;
