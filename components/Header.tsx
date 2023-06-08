"use client";

import Link from "next/link";
import Image from "next/image";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { useSearchStore } from "@/store/SearchStore";
import progress from "@/lib/progress";

export default function Header() {
  const router = useRouter();
  const {
    searchTerm,
    startDate,
    endDate,
    noOfGuests,
    setSearchTerm,
    setDates,
    setNoOfGuests,
    resetSearch,
  } = useSearchStore((state) => ({
    searchTerm: state.searchTerm,
    startDate: state.startDate,
    endDate: state.endDate,
    noOfGuests: state.noOfGuests,
    setSearchTerm: state.setSearchTerm,
    setDates: state.setDates,
    setNoOfGuests: state.setNoOfGuests,
    resetSearch: state.resetSearch,
  }));

  const dateSelectHandler = ({ selection }: RangeKeyDict) => {
    if (!selection.startDate || !selection.endDate) return;
    setDates(selection.startDate, selection.endDate);
  };

  const searchHandler = () => {
    const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd");
    const formattedEndDate = format(new Date(endDate), "yyyy-MM-dd");

    router.push(
      `/search?location=${searchTerm}&from=${formattedStartDate}&to=${formattedEndDate}&guests=${noOfGuests}`
    );

    progress.start();
    resetSearch();
  };

  const selectionRange = { startDate, endDate, key: "selection" };

  return (
    <header className="sticky top-0 z-50 grid w-full grid-cols-3 items-center gap-y-5 bg-white p-5 shadow-md lg:px-10">
      {/* Left */}
      <Link href="/">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          width={128}
          height={40}
          className="cursor-pointer"
        />
      </Link>

      {/* Middle - Search */}
      <div className="flex items-center rounded-full p-2 lg:border-2 lg:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="grow bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400 lg:px-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <MagnifyingGlassIcon className="hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2 text-white lg:block" />
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer lg:block">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 rounded-full border-2 px-4 py-2">
          <Bars3Icon className="h-6 w-6 cursor-pointer" />
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>

      {searchTerm && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={dateSelectHandler}
            minDate={new Date()}
            rangeColors={["#f87171", "#00FF00"]}
          />

          <div className="mt-5 flex items-center border-b">
            <h2 className="grow text-2xl font-semibold">Number of Guests</h2>

            <UsersIcon className="h-5 w-5" />
            <input
              type="number"
              className="w-16 px-2 text-lg text-red-400 outline-none"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(+e.target.value)}
              min={1}
            />
          </div>

          <div className="mt-5 flex items-center space-x-5">
            <button
              onClick={resetSearch}
              className="grow rounded-full bg-gray-100 py-2"
            >
              Cancel
            </button>
            <button
              onClick={searchHandler}
              className="grow rounded-full bg-red-400 py-2 text-white"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
