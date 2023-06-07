"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Header() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number>(1);

  const dateSelectHandler = ({ selection }: RangeKeyDict) => {
    if (!selection.startDate || !selection.endDate) return;

    setStartDate(selection.startDate);
    setEndDate(selection.endDate);
  };

  const cancelHandler = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
    setNumOfGuests(1);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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

      {searchInput && (
        <div className="col-span-3 mx-auto flex flex-col">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#f87171"]}
            onChange={dateSelectHandler}
          />

          <div className="mt-5 flex items-center border-b">
            <h2 className="grow text-2xl font-semibold">Number of Guests</h2>

            <UsersIcon className="h-5 w-5" />
            <input
              type="number"
              className="w-16 px-2 text-lg text-red-400 outline-none"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(+e.target.value)}
              min={1}
            />
          </div>

          <div className="mt-5 flex items-center space-x-5">
            <button
              onClick={cancelHandler}
              className="grow rounded-full bg-gray-100 py-2"
            >
              Cancel
            </button>
            <button className="grow rounded-full bg-red-400 py-2 text-white">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
