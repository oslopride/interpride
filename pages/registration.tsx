import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle";
import * as S from "../components/PageContent";
import PriceTable from "../components/PriceTable";

const Registration = () => (
  <>
    <PageTitle title="Registration"></PageTitle>
    <S.PageContent>
      <p>The registration will open soon.</p>
      <h2>What{"'"}s included?</h2>
      <p>
        We strive to offer an all inclusive experience. All lunches and cofee
        breaks (as well as snacks) will be included. Free entry and drink
        vouchers to our main club event on Saturday and dinners included on
        Thursday, Friday and Saturday. The dinners on Thursday and Saturday will
        include alcoholic beverages.
      </p>
      <p>
        Hotel and breakfast are not included, and all attendees must book their
        own stay. The conference takes place at Clarion Hotel Oslo. A double
        room costs 1,590 NOK (USD 199) per night including breakfast (taxes
        included). See{" "}
        <Link href="/venue">
          <a>the venue page</a>
        </Link>{" "}
        for more information about the hotel. There is also a budget alternative
        over the street at 1,190 NOK (USD 149), without breakfast (taxes
        included) per night.
      </p>
      <h2>Registration Fee</h2>
      <PriceTable />
    </S.PageContent>
  </>
);

export default Registration;
