import Image from "next/image"
import { banner, latestPosts } from "../data"
import Link from "next/link"

const page = () => {
  return (
    <div className="bg-[#242535] text-white md:px-5 py-5">

      <div className="flex flex-col items-center pb-10">
        <h1 className="font-bold text-4xl text-center pb-5">{banner.heading}</h1>
        <Image src={banner.img} alt="MainBanner" width={500} height={500} className="md:w-[70%] w-[90%] h-auto rounded-lg" />
      </div>

      <div className="grid md:grid-cols-3 items-center gap-10 mx-2">
        {latestPosts.map((posts) => (
          <Link href={`/blog/${posts.id}`} key={posts.id}>
            <div className="bg-[#14151e] flex flex-col items-center py-4 border-[0.5px] border-gray-600 rounded-lg px-2 justify-center w-fit cursor-pointer transform transition duration-250 hover:scale-105">
              <Image src={posts.img} alt="photo" width={200} height={200} className="rounded-lg" />
              <div className="flex gap-4 pt-3">
                <p className="text-blue-600 bg-blue-300/20 cursor-pointer px-3 py-1 rounded-lg hover:bg-blue-300/25 active:bg-blue-300/15 duration-150
                md:text-base text-sm">{posts.category}</p>
                <p className="text-blue-600 bg-blue-300/20 cursor-pointer px-3 py-1 rounded-lg hover:bg-blue-300/25 active:bg-blue-300/15 duration-150">{posts.subCategory}</p>
              </div>
              <p className="text-xl font-semibold py-4 text-center">{posts.title}</p>
              <p className="px-3 text-center text-sm text-gray-300">{posts.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page