import Image from "next/image";
import logo from "../../../public/logoforblog.webp";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="min-h-[400px] bg-[#141624] px-6 md:px-12 pt-10 text-white overflow-hidden pb-2">
      <div className="flex flex-col lg:flex-row justify-between gap-10 ">
        <div className="basis-[100%] md:basis-[30%]">
          <h3 className="text-xl">About</h3>
          <p className="py-3 text-gray-300 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae explicabo fugit eius aliquid voluptatibus, fugiat voluptates repellendus quasi commodi quaerat quis minus quia consectetur. Reprehenderit esse fugit dolorum omnis nesciunt!
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <h3 className="font-semibold">Email:</h3>
              <p className="text-gray-300">mparvezalam1978@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <h3 className="font-semibold">Phone:</h3>
              <p className="text-gray-300">+92 123456789</p>
            </div>
          </div>
        </div>

        <div className="basis-[100%] lg:basis-[10%]">
          <h3 className="text-xl">Quick Links</h3>
          <ul className="text-gray-300 flex flex-col items-start lg:items-center gap-2 lg:justify-evenly lg:h-full text-sm md:text-base">
            <Link href='/'><li>Home</li></Link>
            <Link href='/blog'><li>Blog</li></Link>
            <Link href='/contact'><li>Contact us</li></Link>
          </ul>
        </div>

        <div className="basis-[100%] lg:basis-[25%]">
          <div className="bg-[#242535] rounded-lg p-6 flex flex-col items-center justify-center gap-4">
            <h2 className="text-lg md:text-2xl text-center">Weekly Newsletter</h2>
            <p className="text-gray-300 text-sm md:text-base text-center">Get Blog articles offer via Email</p>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full max-w-[300px] h-[40px] md:h-[48px] px-3 rounded-md bg-[#141624] text-sm md:text-base"
            />
            <button className="w-full max-w-[300px] h-[40px] md:h-[48px] bg-[#4B6BFB] duration-200 hover:bg-[#3a53c2] active:bg-[#2644cb] rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-6 lg:gap-0">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="logo"
            height={200}
            width={200}
            className="h-[60px] w-auto rounded-full"
          />
          <div>
            <p className="text-lg">
              Code<span className="font-bold">Crafted</span>
            </p>
            <p className="text-gray-300 text-sm md:text-base">
              &copy;2024. All Rights Reserved by Kashif Ali
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm md:text-base">
          Terms of Use | Privacy Policy | Cookie Policy
        </p>
      </div>
    </section>
  );
};

export default Footer;
