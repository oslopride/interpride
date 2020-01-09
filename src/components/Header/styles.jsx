import styled from "styled-components";

export const Header = styled.header`
	flex-shrink: 0;
	position: relative;
	padding: 1rem 1rem 0;

	@media (min-width: 620px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 1rem 1rem;
	}
`;
