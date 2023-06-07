export default function SearchPage() {
  return (
    <div className="flex">
      <section className="grow px-5 pt-12 lg:px-10">
        <p className="mb-2 text-xs">Found 300+ stays for 2 guests</p>
        <h1 className="mb-6 text-3xl font-semibold">Stays in London</h1>

        <div className="mb-6 hidden space-x-3 whitespace-nowrap text-gray-800 lg:flex">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>
      </section>
    </div>
  );
}
