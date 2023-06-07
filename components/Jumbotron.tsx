import Image from "next/image";

type Props = {
  img: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function LargeCard({
  img,
  title,
  description,
  buttonText,
}: Props) {
  return (
    <div className="relative min-h-[24rem] px-12 py-16">
      <Image src={img} alt={title} fill className="rounded-2xl object-cover" />

      <div className="relative">
        <h3 className="mb-4 w-64 text-4xl">{title}</h3>
        <p>{description}</p>

        <button className="mt-6 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
