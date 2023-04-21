import Image from "next/image";
import Logo from "public/logo.svg";
import Link from "next/link";
import React from "react";
import { useState } from "react";
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
      className={`absolute top-0 left-0 w-screen bg-black px-4 pb-8 z-20 transform ${
        open ? "translate-y-20 sm:translate-y-28" : "-translate-y-full"
      } transition-transform duration-500 ease-in-out filter`}
    >
      <div className=" flex lg:hidden flex-col gap-6 pl-8 antialiased bg-[#161618] rounded-3xl py-8 justify-center mt-10">
        <ul className="flex flex-col gap-3 justify-center">
          <div className="relative group">
            <div className="flex gap-2">
              <button className="hover:text-[#aa4875]">Products</button>
              {isVisible ? (
                <button
                  className="cursor-pointer text-sm font-medium text-green-600"
                  onClick={() => {
                    setIsVisible(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="cursor-pointer text-sm font-medium text-orange-600"
                  onClick={() => {
                    setIsVisible(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>
              )}
            </div>
            {isVisible && (
              <div className="absolute top-0 lg:-left-48 transition group-hover:translate-y-8 translate-y-0 opacity-0 invisible group-hover:visible duration-500 ease-in-out group-hover:opacity-100 group-hover:transform z-50 lg:min-w-[760px] transform">
                {/* <Menu /> */}
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
}
const Header = (props: Props) => {
  const [open, setOpen] = useState(false); //initial stage is false because the button is not open

  return (
    <div className="flex flex-col pt-4 lg:pt-0 lg:flex-row lg:justify-between lg:items-center">
      {/* LOGO */}
      <div className="flex justify-between items-center align-middle px-4">
        <div className="flex gap-2 justify-center items-center">
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
