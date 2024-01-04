import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import {
  FaBalanceScale,
  FaBriefcase,
  FaRegHeart,
  FaSearch,
  FaUser,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-start-nav to-end-nav px-pad">
      <div className="grid grid-flow-col">
        <div className="flex items-center  h-24">
          <span>
            <Link href="/">
              <Image
                src={logo}
                alt="Picture of the logo"
                className="rounded-full shadow-lg w-full"
                // width={64}
                // height={64}
                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </Link>
          </span>
          <span>
            <Link href="/" className="text-white text-2xl ">
              Sell.com
            </Link>
          </span>
        </div>
        <div className="flex items-center w-full  rounded-md ">
          <span className="flex border w-full border-white">
            <input
              type="text"
              className="h-10 w-full px-5 rounded-md"
              placeholder="Search hear..."
            />
            <span className="border-none px-6 bg-[#0d70d1] rounded-md">
              <FaSearch className="text-xl h-10 text-white " />
            </span>
          </span>
        </div>

        <div className="flex items-center ml-auto ">
          <div className="flex items-center gap-2 text-white ">
            <span>
              <FaUser />
            </span>
            <span className="cursor-pointer">Sign In</span>
            <span className="border border-white h-4 "></span>
            <span className="cursor-pointer">Register</span>
          </div>
          <div className="border border-white h-12 mx-8"></div>
          <div className=" flex  items-center gap-3 text-white">
            <div className="flex flex-col items-center  ">
              <span>
                <FaRegHeart className="font-semibold text-3xl" />
              </span>
              <span>Wishlist</span>
            </div>
            <div className="flex flex-col items-center">
              <span>
                <FaBalanceScale className="font-semibold text-3xl" />
              </span>
              <span>Compare</span>
            </div>
            <div className="flex flex-col items-center">
              <span>
                <FaBriefcase className="font-semibold text-3xl" />
              </span>
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
