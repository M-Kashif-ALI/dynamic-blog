"use client"

import Image from "next/image"
import logo from "../../../public/logoforblog.webp"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:py-5 py-3 flex items-center justify-between md:justify-evenly px-4 bg-[#242535] w-screen mx-auto backdrop-blur-sm">
      <div>
        <Image src={logo} alt="logo" height={200} width={200} className="rounded-full md:h-[100px] h-[70px] w-auto" />
      </div>

      <div className="md:hidden block">
        {!isOpen ? (
          <button onClick={() => setIsOpen(true)}><FaBars className="text-white text-2xl" /></button>
        ) : (
          <button onClick={() => setIsOpen(false)}><FaX className="text-white text-2xl" /></button>
        )}

        {
          isOpen && <div className="absolute flex flex-col items-center top-[100px] right-[10px] text-xl font-semibold text-white backdrop-blur-sm bg-black/20 px-5 py-5 h-screen">
            <ul className="flex flex-col items-center gap-10 pt-5">
            <Link href='/'><li>Home</li></Link>
              <Link href='/blog'><li>Blog</li></Link>
              <Link href='/contact'><li>Contact us</li></Link>
            </ul>

            <div className="mt-5">
              <div className="flex items-center">
                <input type="text" placeholder="Search" className="h-[30px] rounded pl-4 focus:outline-none bg-slate-200 w-[80px] text-base" />
              </div>
            </div>
          </div>
        }
      </div>


      <div className="md:block hidden">
        <ul className="flex gap-10 text-white font-serif font-bold text-xl">

          <Link href='/'>
          <li className="cursor-pointer hover:text-slate-300 active:text-gray-500">Home</li>
          </Link>

          <Link href='/blog'>
          <li className="cursor-pointer hover:text-slate-300 active:text-gray-500">Blog</li>
          </Link>

          <Link href='/contact'>
          <li className="cursor-pointer hover:text-slate-300 active:text-gray-500">Contact us</li>
          </Link>
        </ul>
      </div>

      <div className="md:flex hidden bg-slate-200 rounded">
        <div className="flex items-center">
          <p className="text-slate-400 px-3 cursor-pointer">Q</p>
          <input type="text" placeholder="Search" className="h-[40px] rounded px-3 focus:outline-none bg-slate-200" />
        </div>
      </div>
    </div>
  )
}

export default NavBar