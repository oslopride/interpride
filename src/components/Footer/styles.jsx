import styled from "styled-components";

export const Footer = styled.footer`
	margin-top: auto;
	padding: 2.5rem 1rem;
	background-color: white;
	text-align: center;
	font-family: Open Sans;
	font-weight: 500;

	@media (min-width: 620px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	a {
		margin-right: 10px;
	}
`;
