import { redirect } from "next/navigation";
import { format } from "date-fns";

import PropertyCard from "@/components/PropertyCard";
import MapView from "@/components/MapView";

type Props = {
  searchParams: {
    location: string | undefined;
    from: string | undefined;
    to: string | undefined;
    guests: string | undefined;
  };
};

async function getSearchResults() {
  const response = await fetch("https://www.jsonkeeper.com/b/5NPS");
  return response.json();
}

export default async function SearchPage({ searchParams }: Props) {
  const {
    location,
    from: startDate,
    to: endDate,
    guests: noOfGuests,
  } = searchParams;

  if (!location || !startDate || !endDate || !noOfGuests) {
    redirect("/");
  }

  // fetch properties based on search params
  const searchResults: Property[] = await getSearchResults();

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="flex">
      <section className="grow px-5 py-12 lg:px-10">
        <p className="mb-2 text-xs">
          {searchResults.length}+ stays | {range} | {noOfGuests} guests
        </p>
        <h1 className="text-3xl font-semibold">Stays in {location}</h1>

        <div className="hidden space-x-3 whitespace-nowrap border-b py-6 text-gray-800 lg:flex">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map((item) => (
            <PropertyCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="hidden w-2/5 xl:flex 2xl:w-1/2">
        <MapView />
      </section>
    </div>
  );
}
