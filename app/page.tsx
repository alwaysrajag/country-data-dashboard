/**
 * @author Raja Ganesan
 * @email alwaysrajag@gmail.com
 * @create date 08-10-2024 21:19
 * @modify date 08-10-2024 21:19
 * @desc [description]
 */

import { Suspense } from "react";
import { InView } from "react-intersection-observer";
import CountryCard from "./(components)/Country-Card/Country-Card";
import { Country } from "./lib/definitions";
import SetQueryFilters from "./SetQueryFilters";

type SearchParams = {
  name?: string;
  region?: string;
  sortByPopulation?: string;
};

async function getData(searchParams: SearchParams | undefined) {
  const name = searchParams?.name || "";
  const region = searchParams?.region || "";

  let url = "https://restcountries.com/v3.1";
  if (name.length > 0) {
    url = `${url}/name/${name}`;
  } else if (region.length > 0 && region !== "All") {
    url = `${url}/region/${region}`;
  } else {
    url = `${url}/all`;
  }
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  let countries = await getData(searchParams);
  console.log(countries.length);
  const order = searchParams?.sortByPopulation || "";

  if (order) {
    countries = countries.sort((a: Country, b: Country) => {
      if (order === "asc") {
        return a.population - b.population;
      }

      return b.population - a.population;
    });
  }
  return (
    <section className="container mx-auto p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <SetQueryFilters />
      </Suspense>
      <InView as="div">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {countries.map((country: Country) => (
            <CountryCard key={country.name.common} {...country} />
          ))}
        </div>
      </InView>
    </section>
  );
}
