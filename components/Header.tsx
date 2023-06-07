import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center bg-white p-5 shadow-md lg:px-10">
      {/* Left */}
      <div className="w-1/3">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Airbnb logo"
          width={128}
          height={40}
          className="cursor-pointer"
        />
      </div>

      {/* Middle - Search */}
      <div className="flex w-1/3 items-center rounded-full p-2 lg:border-2 lg:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="grow bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400 lg:px-4"
        />
        <MagnifyingGlassIcon className="hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2 text-white lg:block" />
      </div>

      {/* Right */}
      <div className="flex w-1/3 items-center justify-end space-x-4 text-gray-500">
        <p className="hidden cursor-pointer lg:block">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 rounded-full border-2 px-4 py-2">
          <Bars3Icon className="h-6 w-6 cursor-pointer" />
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
