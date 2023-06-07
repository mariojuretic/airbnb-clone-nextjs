import Banner from "@/components/Banner";
import Header from "@/components/Header";
import DestinationCard from "@/components/DestinationCard";
import ExperienceCard from "@/components/ExperienceCard";
import Jumbotron from "@/components/Jumbotron";
import Footer from "@/components/Footer";

async function getDestinations() {
  const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
  return response.json();
}

async function getExperiences() {
  const response = await fetch("https://www.jsonkeeper.com/b/VHHT");
  return response.json();
}

export default async function HomePage() {
  const [destinations, experiences]: [Destination[], Experience[]] =
    await Promise.all([getDestinations(), getExperiences()]);

  return (
    <div>
      <Header />
      <Banner />

      <main className="mx-auto max-w-7xl px-8 pb-8 sm:px-16 sm:pb-16">
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

        <section className="pt-8 sm:pt-16">
          <h2 className="mb-8 text-4xl font-semibold">Live Anywhere</h2>

          <div className="-my-4 -ml-4 flex space-x-4 overflow-x-scroll py-4 pl-4 scrollbar-hide">
            {experiences?.map(({ img, title }) => (
              <ExperienceCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>

        <section className="pt-8 sm:pt-16">
          <Jumbotron
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
