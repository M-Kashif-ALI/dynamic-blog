import Image from "next/image";
import { banner } from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#242535] min-h-screen w-full md:flex items-center px-4 gap-4">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-white text-5xl w-full md:w-[80%] font-semibold">{banner.heading}</h1>
        <p className="text-white text-sm w-full md:w-[80%] pb-6">{banner.desc}</p>

        <Link href='/blog' className="h-fit md:w-[30%] w-full mb-5 py-3 px-1 rounded-lg text-white font-semibold hover:bg-blue-700 active:bg-blue-800 duration-100 bg-blue-600 md:pl-[70px] pl-[100px]">
          <button>Read More</button>
        </Link>
      </div>

      <div>
        <Image src={banner.img} alt="banner" height={1000} width={1000} className="md:h-[300px] h-[200px] w-auto pb-6" />
      </div>

    </div>
  );
}
