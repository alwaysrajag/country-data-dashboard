/**
 * @author Raja Ganesan
 * @email alwaysrajag@gmail.com
 * @create date 09-10-2024 08:17
 * @modify date 09-10-2024 08:17
 * @desc [description]
 */
import React from "react";
import Image from "next/image";
import { Country } from "@/app/lib/definitions";
import Link from "next/link";

function CountryCard({ flags, name, capital, population, region }: Country) {
  return (
    <Link href={`/${name.common}`}>
      <article className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden cursor-pointer">
        <Image
          src={flags.svg}
          className="md:h-72 w-full object-cover"
          width={500}
          height={100}
          alt="Picture of the country"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
            {name.common}
          </h2>
          <ul className="flex flex-col items-start justify-start gap-2 dark:text-gray-400">
            <li>Capital: {capital}</li>
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
          </ul>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
