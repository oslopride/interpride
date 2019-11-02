import styled from "styled-components";

export const PriceTable = styled.div`
	overflow-x: auto;

	table {
		background: #05264c;
		border-collapse: collapse;
		width: 100%;
		text-align: left;

		th {
			border-bottom: 1px solid #364043;
			color: #fec101;
			font-weight: 600;
			padding: 0.5rem 1rem;
		}
		td {
			font-size: 1rem;
			color: #fff;
			font-weight: 300;
			padding: 0.65rem 1rem;
			min-width: 10rem;
		}
		.disabled td {
			color: #4f5f64;
		}
		tbody tr {
			transition: background 0.25s ease;
		}
		tbody tr:hover {
			background: #014055;
		}
	}
`;
