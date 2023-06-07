import Image from "next/image";

export default function ExperienceCard({ img, title }: Experience) {
  return (
    <div className="cursor-pointer transition-all duration-300 hover:scale-105">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} fill className="rounded-xl" />
      </div>
      <h3 className="mt-4 text-2xl">{title}</h3>
    </div>
  );
}
