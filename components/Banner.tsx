import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Banner"
        fill
        className="object-cover object-bottom"
      />

      <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="mt-4 rounded-full bg-white px-10 py-4 font-bold text-purple-500 shadow-md transition-all duration-150 hover:shadow-xl active:scale-90">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}
