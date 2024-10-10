/**
 * @author Raja Ganesan
 * @email alwaysrajag@gmail.com
 * @create date 09-10-2024 08:17
 * @modify date 09-10-2024 08:17
 * @desc [description]
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Country } from "../lib/definitions";

async function getData(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CountryDetail({
  params: { name },
}: {
  params: { name: string };
}) {
  const country = await getData(name);
  const getCurrencies = (cur: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  }) => {
    return Object.keys(cur).map(
      (name: string) => `${cur[name].symbol} ${cur[name].name}`
    );
  };

  const getLanguages = (lan: { [key: string]: string }) => {
    return Object.keys(lan).map((name: string) => `${lan[name]} `);
  };
  return (
    <>
      <section className="p-8 md:py-0 max-w-7xl mx-auto">
        {country.map((item: Country) => (
          <div
            key={item.population}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
          >
            <article>
              <Image
                src={item.flags.svg}
                className="md:h-72 w-full object-cover"
                width={500}
                height={100}
                alt={item.name.common}
              />
            </article>

            <article>
              <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">
                {item.name.official}
              </h1>

              <ul className="my-4 flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
                <li>Currencies: {getCurrencies(item.currencies)}</li>
                <li>Languages: {getLanguages(item.languages)}</li>
                <li>Timezones: {item.timezones.join("")}</li>
              </ul>

              <Link
                href="/"
                className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
