import PropertyCard from "@/components/PropertyCard";

async function getSearchResults() {
  const response = await fetch("https://www.jsonkeeper.com/b/5NPS");
  return response.json();
}

export default async function SearchPage() {
  const searchResults: Property[] = await getSearchResults();

  return (
    <div className="flex">
      <section className="grow px-5 py-12 lg:px-10">
        <p className="mb-2 text-xs">Found 300+ stays for 2 guests</p>
        <h1 className="text-3xl font-semibold">Stays in London</h1>

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
    </div>
  );
}
