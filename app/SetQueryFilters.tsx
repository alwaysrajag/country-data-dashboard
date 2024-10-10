"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import ThemeSwitch from "./(components)/ThemeSwitcher/ThemeSwitcher";

type Region = {
  name: string;
};

export default function SetQueryFilters() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const regions: Array<Region> = [
    {
      name: "All",
    },
    {
      name: "Africa",
    },
    {
      name: "Americas",
    },
    {
      name: "Antarctic",
    },
    {
      name: "Asia",
    },

    {
      name: "Europe",
    },
    {
      name: "Oceania",
    },
  ];

  const onSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("name", term);
      params.delete("region");
    } else {
      params.delete("name");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const filterByRegion = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("region", term);
      params.delete("name");
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const sortOrder = (order: string) => {
    const params = new URLSearchParams(searchParams);
    if (order) {
      params.set("sortByPopulation", order);
    } else {
      params.delete("sortByPopulation");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
      <div className="max-w-3xl md:flex-1">
        <input
          placeholder="Search by name"
          type="text"
          className="py-3 px-4 text-gray-600 placeholder-gray-600 w-full shadow rounded outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700 transition-all duration-200"
          //   value={searchParams.get("query") || ""}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div>
        <span className="font-bold text-gray-600 dark:text-gray-400 ">
          Sort By Population:
        </span>
        <a
          href="#"
          onClick={() => sortOrder("desc")}
          className="px-3 font-medium text-gray-600 dark:text-gray-400"
        >
          High to Low
        </a>

        <a
          href="#"
          onClick={() => sortOrder("asc")}
          className="font-medium text-gray-600 dark:text-gray-400 "
        >
          Low to High
        </a>
      </div>
      <select
        name="filter-by-region"
        id="filter-by-region"
        className="w-52 py-3 px-4 outline-none shadow rounded text-gray-600 dark:text-gray-400 dark:bg-gray-800 dark:focus:bg-gray-700"
        onChange={(e) => filterByRegion(e.target.value)}
      >
        {regions.map((region, index) => (
          <option key={index} value={region.name}>
            {region.name}
          </option>
        ))}
      </select>
      <ThemeSwitch />
    </div>
  );
}
