import Banner from "@/components/Banner";
import Header from "@/components/Header";
import DestinationCard from "@/components/DestinationCard";

async function getDestinations() {
  const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
  return response.json();
}

export default async function HomePage() {
  const destinations: Destination[] = await getDestinations();

  return (
    <div>
      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 sm:px-16">
        <section className="pt-8 sm:pt-16">
          <h2 className="mb-8 text-4xl font-semibold">Explore Nearby</h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations?.map(({ img, location, distance }) => (
              <DestinationCard
                key={location}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
