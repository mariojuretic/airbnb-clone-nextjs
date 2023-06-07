import Image from "next/image";

export default function DestinationCard({
  img,
  location,
  distance,
}: Destination) {
  return (
    <div className="flex cursor-pointer items-center space-x-4 rounded-xl transition-all duration-200 hover:scale-105 hover:bg-gray-100">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} fill className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
