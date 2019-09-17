import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import * as S from "../components/PageContent";

const Registration = () => (
  <>
    <PageTitle title="Registration"></PageTitle>
    <S.PageContent>
      <p>The registration will open on October 17.</p>
      <h2>What{"'"}s included?</h2>
      <p>
        We have strived to ofer an all inclusive experience. All lunches and
        cofee breaks (as well as snacks) will be included. Attendees will also
        have free roundtrip transportation from and to the airport with the
        airport express train approximately 90 meters (300 ft) from the hotel.
        Free entry and drink vouchers to our main club event on Saturday and
        dinners included on Thursday, Friday and Saturday. The dinners on
        Thursday and Saturday will include alcoholic beverages.
      </p>
      <p>
        Hotel and breakfast are not included, and all attendees must book their
        own stay. The conference takes place at Clarion Hotel Oslo. A double
        room costs 1,590 NOK (USD 199) per night including breakfast (taxes
        included). See{" "}
        <Link href="/venue">
          <a>the venue page</a>
        </Link>{" "}
        for more information about the hotel. There is also a budget alternatve
        over the street at 1,190 NOK (USD 149), without breakfast (taxes
        included) per night.
      </p>
      <h2>Registration Fee</h2>
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
            <td>1,680 NOK (210 USD)</td>
            <td>January 1, 2020</td>
          </tr>
          <tr>
            <td>Early-Bird</td>
            <td>2,000 NOK (250 USD)</td>
            <td>March 1, 2020</td>
          </tr>
          <tr>
            <td>Regular</td>
            <td>2,200 NOK (275 USD)</td>
            <td>July 1, 2020</td>
          </tr>
          <tr>
            <td>Late</td>
            <td>2,600 NOK (325 USD)</td>
            <td>September 1, 2020</td>
          </tr>
        </tbody>
      </table>
    </S.PageContent>
  </>
);

export default Registration;
