import React from "react";
import * as S from "./styles";

const PriceTable = () => {
	return (
		<S.PriceTable>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Price</th>
						<th>Registration deadline</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Super Early-Bird</td>
						<td>210 USD</td>
						<td>January 1, 2020</td>
					</tr>
					<tr>
						<td>Early-Bird</td>
						<td>250 USD</td>
						<td>March 1, 2020</td>
					</tr>
					<tr>
						<td>Regular</td>
						<td>275 USD</td>
						<td>July 1, 2020</td>
					</tr>
					<tr>
						<td>Late</td>
						<td>325 USD</td>
						<td>September 1, 2020</td>
					</tr>
				</tbody>
			</table>
		</S.PriceTable>
	);
};

export default PriceTable;
