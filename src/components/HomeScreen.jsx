import React from "react";
import {
  AiFillHome,
  AiOutlineInfoCircle,
  AiOutlineRight,
} from "react-icons/ai";
import {
  MdVerified,
  MdOutlineStarPurple500,
  MdLaptopMac,
} from "react-icons/md";
import { GiPlainCircle } from "react-icons/gi";
import { BiCircle } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdStarHalf,
} from "react-icons/io";
import { Link } from "react-router-dom";

import Logo from "../assets/dero.jpeg";
import bg from "../assets/derobanner.jpg";

// import Binance from "../assets/Binance.jpg";
// import Coin98 from "../assets/Coin98.jpg";
// import Ethereum from "../assets/Ethereum.jpg";
// import Phantom from "../assets/Phantom.jpg";
// import Terra from "../assets/Terra.jpg";

const Body = () => {
  return (
    <div className="bg-white mt-[6rem] min-w-screen overflow-x-scroll">
      <div className="lg:max-w-[65vw] mx-auto">
        <div className="flex gap-3">
          <span
            className="text-blue-600 font-semibold flex 
          gap-3 items-center justify-center"
          >
            <span>Home </span>
            <span className="text-gray-600 text-sm font-semibold">
              <AiOutlineRight className="text-xs font-bold" />
            </span>{" "}
          </span>
          <span
            className="text-blue-600 font-semibold flex 
          gap-3 items-center justify-center"
          >
            <span>Extensions </span>
            <span className="text-gray-600 text-sm font-semibold">
              <AiOutlineRight className="text-xs font-bold" />
            </span>
          </span>
          <span
            className="font-semibold flex text-gray-600
          gap-3 items-center justify-center text-sm"
          >
            Dero RPC Bridge
          </span>
        </div>

        <div className=" flex justify-between items-center px-2 mt-8">
          <div className="flex items-start justify-center gap-5">
            <img className="w-[60px]" src={Logo} alt="" />
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl ">Dero RPC Bridge</h1>
              <div className="mt-3  flex items-center justify-start">
                <div className="p-1 hover:bg-blue-100 rounded-full cursor-pointer ">
                  <MdVerified className="text-blue-500" />
                </div>
                <span className="cursor-pointer text-blue-600 text-sm font-semibold hover:text-blue-700">
                  derorpcbridge.io
                </span>

                <div className="flex items-center justify-center ml-4 gap-2">
                  <AiOutlineRight className="text-xs text-blue-800 font-bold" />
                  <p className="text-blue-700">Featured</p>
                </div>
              </div>
              <div className="mt-4 flex  items-center justify-start">
                <div className="flex">
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <MdOutlineStarPurple500 className="text-[24px]" />
                  <IoMdStarHalf className="text-[24px]" />
                  <IoMdStarHalf className="text-[24px] " />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-sm">2,740 </p>
                  <span className="text-gray-600 p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                    <AiOutlineInfoCircle />
                  </span>
                  <div className="w-[1.2px] h-[20px] bg-gray-500" />
                  <p
                    className="text-blue-700 hover:text-blue-800 cursor-pointer
                        font-medium"
                  >
                    Productivity
                  </p>
                  <div className="w-[1.2px] h-[20px] bg-gray-500" />
                  <p className="text-gray-500">
                    464 <span>users</span>
                  </p>
                </div>
              </div>
              <Link to="/wallet">
                <span
                  className="text-md font-medium px-5 max-w-[40%] py-2
              mt-2 rounded-md bg-blue-600 text-white cursor-pointer"
                >
                  Add to Chrome
                </span>
              </Link>
            </div>
          </div>
          <Link to="/wallet">
            <span
              className="text-md font-medium px-5 max-w-[40%] py-2
            mt-2 rounded-md bg-blue-600 text-white cursor-pointer"
            >
              Add to Chrome
            </span>
          </Link>
        </div>

        {/* third body */}
        <div
          className="
                     w-full h-[1.5px] bg-gray-100 mt-[2rem]"
        />
        <div className="flex flex-col items-center justify-center mt-7">
          <div className="flex items-center justify-center gap-5">
            <span
              className=" px-4 py-2 bg-white text-blue-600 shadow-lg 
            rounded-full cursor-pointer"
            >
              Overview
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Privacy practices
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Reviews
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Support
            </span>
            <span className=" px-4 py-2 bg-white text-gray-500 font-medium text-sm cursor-pointer">
              Related
            </span>
          </div>

          {/* img */}
          <div className="bg-gray-100 mt-[2rem] ">
            <div className="flex items-center justify-center w-full bg-gray-100 ">
              <div
                className="p-5 bg-white  
            mr-8 rounded-full hover:shadow-md"
              >
                <IoIosArrowBack />
              </div>
              <div>
                <img src={bg} alt="" />
              </div>
              <div className="p-5 bg-white ml-8  rounded-full hover:shadow-md">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="mt-3 flex gap-2 items-center justify-center">
              <GiPlainCircle size={15} />
              <BiCircle size={15} />
              <BiCircle size={15} />
              <BiCircle size={15} />
              <BiCircle size={15} />
            </div>
          </div>

          {/* textsss */}
          <div className=" flex justify-between  bg-white px-4 pt-[4rem] mt-[2rem] overscroll-x-scroll w-full">
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="text-2xl text-gray=600">Overview</h1>
              <div className="flex gap-2 items-center  text-gray-500">
                <MdLaptopMac />
                <span>compatible with your device</span>
              </div>
              <div className="flex flex-col gap-4 text-gray-600 text-[17px] px-3 max-w-[500px]">
                <p>
                  Safely connect your local wallet with a website using Dero RPC
                  Bridge.
                </p>
                <p>Connect your Dero CLI wallet with your Browser.</p>
                <p>
                  Dero RPC Bridge is an extension needed for interacting with
                  Dero Smart Contracts or any other Dero decentralized
                  applications website.
                </p>
                <p>
                  The extension is basically a secure interface to review
                  transactions from a DApp website. It will intercept all
                  transfers and open a confirmation window prior to sending
                  transactions to the blockchain. The user can accept or reject
                  the transaction.
                </p>
                <p>
                  View the source code on Github:
                  https://github.com/g45t345rt/dero-rpc-bridge
                </p>

                {/* <span
                  className="px-4 py-[3px] text-sm flex items-center justify-center
                 text-blue-600 rounded-md cursor-pointer hover:bg-blue-50 border-[1px]
                  border-gray-300 min-w-[40%] max-w-[60%] md:max-w-[30%] bg-white"
                >
                  Read more
                </span> */}
              </div>
            </div>
            <div className="flex gap-2 h-full flex-1 w-full">
              <div className="w-[2px] h-100% bg-gray-300" />
              <div className="flex flex-col">
                <h1 className="text-2xl ">Additional Information</h1>
                <div className="mt-3 flex gap-6 items-center mb-3">
                  <span
                    className="text-blue-500 flex items-center cursor-pointer
                   hover:text-blue-600 justify-center gap-1 text-md"
                  >
                    <AiFillHome />
                    <p>Website</p>
                  </span>
                  <span
                    className="flex items-center justify-center  text-md
                  cursor-pointer gap-1  hover:text-red-700 text-red-600"
                  >
                    <HiInformationCircle />
                    <p>Report abuse</p>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Offered by</p>
                    <p className="text-gray-500 text-sm">g45t345rt</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Version</p>
                    <p className="text-gray-500 text-sm">1.5.3</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Updated</p>
                    <p className="text-gray-500 text-sm"> September 29, 2022</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Size</p>
                    <p className="text-gray-500 text-sm">1009KiB</p>
                  </span>
                  <span className="flex flex-col">
                    <p className="font-semibold text-gray-600">Language</p>
                    <p className="text-blue-500 text-sm">English</p>
                  </span>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-gray-600">Publisher</h2>
                    <p className=" text-md text-blue-600">
                      Contact the publisher
                    </p>
                    <span className="text-md text-gray-600 italic max-w-[65%]">
                      This publisher has not identified itself as a trader. For
                      consumers in the European Union, please note that consumer
                      rights may not apply to contracts between you and this
                      publisher.
                    </span>
                    {/* <span className="text-xs text-gray-500 italic max-w-[65%]">
                      Brooklyn, NY 11206-3840
                    </span>
                    <span className="text-xs text-gray-500 italic max-w-[65%]">
                      US
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* related */}
          <div
            className="bg-gray-100 h-[250px] w-full flex flex-col
          items-center justify-center"
          >
            <h1 className="text-3xl">Related</h1>
            <div className="flex gap-6 items-center justify-center mt-6">
              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src="https://lh3.googleusercontent.com/WXWCnNxQSX4fU3lBbsZqg4QwRx1t9fk1WsnQIIdE6OKjOeUzwAjIlV6_sSmkNGUZDIoY0C3xqIsUCDgeGUlOvbyTjw=w50-h50-e365-rj-sc0x00ffffff"
                  alt=""
                />
                <h1 className="text-gray-500">ICONex</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[22px] text-gray-900" />

                    {/* <IoMdStarHalf className="text-[24px] " /> */}
                  </div>
                  <p className="text-sm text-gray-600">106</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src="https://lh3.googleusercontent.com/Y5OootsD19L0YMurKPXduEJmhBuJQBwOuN4lwan2O4wknrUeZCh0H5N1TydwbOGuQbCS8ZXO1v1S62thczraIGvoFg=w50-h50-e365-rj-sc0x00ffffff"
                  alt=""
                />
                <h1 className="text-gray-500">Scatter</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[24px] " />
                  </div>
                  <p className="text-sm text-gray-600">103</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src="https://lh3.googleusercontent.com/cCduIQ8admeWPvs-Cd4rjbdQx08SbdwIb33l954AZXpYwkknMqhjyHuD3wlOob2iygnnIl5iM70oF3ZYZCpdGQBe=w50-h50-e365-rj-sc0x00ffffff"
                  alt=""
                />
                <h1 className="text-gray-500">Presearch.com Search W...</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />

                    {/* <IoMdStarHalf className="text-[24px] " /> */}
                  </div>
                  <p className="text-sm text-gray-600">140</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src="https://lh3.googleusercontent.com/lv1Ras6ux_YN-LdWvL69MYKi4phi7mtXrhLi5umba9NagBB_ZnvYJwiHdKr-k-q77WIskj58z2BCD8Dpfk9WyWkVaro=w50-h50-e365-rj-sc0x00ffffff"
                  alt=""
                />
                <h1 className="text-gray-500">Keplr</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <IoMdStarHalf className="text-[24px] " />
                    {/* <MdOutlineStarPurple500 className="text-[22px] text-gray-900" /> */}

                    {/*  */}
                  </div>
                  <p className="text-sm text-gray-600">103</p>
                </div>
              </div>

              <div className="py-4 bg-white px-14 flex flex-col items-center justify-center">
                <img
                  className="w-[30px]"
                  src="https://lh3.googleusercontent.com/VeZX_e-xt557hSiE-vcp-tbvRj84YJ0y-pq0Brksiy6VHqhIJGhlWLr34yEGMrOfi2sMdJUQGy2TAqTiUSX8vaTEDg=w50-h50-e365-rj-sc0x00ffffff"
                  alt=""
                />
                <h1 className="text-gray-500">BitTube Airtime Donate..</h1>
                <div className="flex gap-1 items-center justify-center">
                  <div className="flex">
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />
                    <MdOutlineStarPurple500 className="text-[22px] text-gray-900" />

                    {/* <IoMdStarHalf className="text-[24px] " /> */}
                  </div>
                  <p className="text-sm text-gray-600">460</p>
                </div>
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="h-[15rem] bg-blue-500 w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center p-3">
              <h1 className="text-2xl font-semibold text-white text-center">
                Safely connect your local wallet with a website using Dero RPC
                Bridge.
              </h1>
              <span className=" cursor-pointer px-5 py-2 bg-white text-blue-400 mt-5 rounded-md">
                Remove from chrome
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
