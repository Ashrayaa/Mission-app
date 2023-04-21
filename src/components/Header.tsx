import Image from "next/image";
import Logo from "public/logo.svg";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Banner from "./Banner";
type Props = {};

function MobileNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className={`absolute h-full top-0 left-0 w-screen bg-[#0E0E0E] pb-8 z-20 transform ${
        open ? "translate-y-5 sm:translate-y-28" : "-translate-y-full"
      } transition-transform duration-500 ease-in-out filter flex flex-col justify-between `}
    >
      <div className="px-5 lg:hidden antialiased bg-[#0E0E0E] mt-10">
        <ul className="flex flex-col gap-3 mt-52">
          <button className=" font-2xl text-bold text-left">
            <Link href="/genesisPass"> GENESIS PASS</Link>
          </button>
          <button className=" font-2xl font-bold text-left">
            <Link href="/services">SERVICES</Link>
          </button>
          <button className=" font-2xl font-bold text-left">
            <Link href="/projects">PROJECTS</Link>{" "}
          </button>
          <button className=" font-2xl font-bold text-left">
            <Link href="/nft">NFT</Link>{" "}
          </button>
          <button className=" font-2xl font-bold text-left">
            <Link href="/faq">FAQ</Link>{" "}
          </button>
          <div className="flex justify-between">
            <button className="text-[#767676] text-left font-2xl text-bold">
              PRATFORM{" "}
            </button>
            <p className="text-[#767676] text-left font-2xl text-bold">
              COMING SOON
            </p>{" "}
          </div>
        </ul>
      </div>

      <Banner />
    </div>
  );
}
const Header = (props: Props) => {
  const [open, setOpen] = useState(false); //initial stage is false because the button is not open

  return (
    <div className="flex flex-col pt-4 lg:pt-0 lg:flex-row lg:justify-between lg:items-center">
      {/* LOGO */}
      <div className="flex justify-between items-center align-middle px-4">
        <div className="flex gap-2 z-40 justify-center items-center">
          <Link href="/">
            <Image src={Logo} alt="logo" width="35" className="" />
          </Link>
          <p>We&apos;re on a Mission</p>
        </div>
        <MobileNav open={open} setOpen={setOpen} />
        <div className=" flex lg:hidden justify-center items-center">
          <div
            className="group z-50 relative w-8 h-4 cursor-pointer flex-col justify-between items-center flex"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {/* hamburger menu */}
            <span
              className={`h-1 w-full bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "rotate-45 translate-y-0.5" : ""
              }`}
            />
            {/* <span
                  className={`h-1 w-full bg-white rounded-lg  cursor-pointer transform transition duration-300 ease-in-out ${
                    open ? "w-0" : "w-full"
                  }`}
                /> */}
            <span
              className={`h-1 w-full bg-white rounded-lg  cursor-pointer transform transition duration-300 ease-in-out ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="hidden lg:flex antialiased lg:justify-center ">
        <button className="pr-4">LOGO</button>
      </div>
    </div>
  );
};

export default Header;
