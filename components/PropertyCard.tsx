import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PropertyCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}: Property) {
  return (
    <div className="flex cursor-pointer border-b p-6 transition-all duration-200 hover:opacity-80 hover:shadow-lg">
      <div className="relative h-24 w-40 shrink-0 md:h-52 md:w-80">
        <Image
          src={img}
          alt={location}
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="ml-6 flex grow flex-col">
        <div className="flex items-start justify-between">
          <div>
            <p>{location}</p>
            <h4 className="text-xl">{title}</h4>
          </div>
          <HeartIcon className="h-8 w-8 cursor-pointer text-gray-500" />
        </div>

        <div className="my-2 h-px w-10 bg-gray-200" />

        <p className="grow text-sm text-gray-500">{description}</p>

        <div className="mt-4 flex items-end justify-between">
          <p className="flex items-center space-x-2">
            <StarIcon className="h-6 w-6 text-red-400" />
            <span>{star}</span>
          </p>

          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="font-light">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
