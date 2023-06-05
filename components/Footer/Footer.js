import React from "react";
import Link from "next/link";
import Container from "../Container/Container";
const Footer = () => {
  return (
    <Container>
      <div className="max-w-6xl md:max-w-full bg-[#201F54] pb-[2rem] pt-[2rem]">
        <div className="md:max-w-full bg-[#201F54] flex flex-col md:flex-row  md:justify-between px-0 px-[4rem] py-2 md:py-[4rem] md:py-4 justify-center items-center space-y-6 md:space-y-0  gap-5 md:gap-x-32">
          <div className="max-w-sm flex justify-center items-center flex-col gap-4">
            <h1 className="text-3xl font-bold text-white">About us</h1>
            <p className="w-[100%] text-2xs text-white">
              Tilottama Campus was established in 1996 as the first private
              college in Rupandehi by a team of dedicated, experienced and
              enterprising academicians to cater for the growing demands of
              parents and students in the higher education by providing quality
              education and guaranteeing top class graduates.
            </p>
          </div>

          <div className="flex flex-col justify-between items-center space-y-3 md:space-y-2 ">
            <h1 className="text-white font-bold text-3xl max-w-md">
              Quick Links
            </h1>
            <div>
              <ul className="flex flex-col list-none py-2 space-y-3 font-light list-disc   text-white justify-center items-start text-2xs">
                <li className="max-w-md w-[100%]">
                  <Link href={"/"}>About Tilottama</Link>
                </li>
                <li className="max-w-md">
                  <Link href={"/"}>Entrance Exam</Link>
                </li>
                <li className="max-w-md">
                  <Link href={"/"}>Courses</Link>
                </li>
                <li className="max-w-md">
                  <Link href={"/"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center space-y-2">
            <h1 className="text-white font-bold text-3xl pl-0 md:pl-[0.5rem]">
              Contact Us
            </h1>
            <div className="flex md:flex-row space-x-5 p-2">
              <div>
                <ul className="flex flex-col py-5 space-y-6 justify-between  items-center">
                  <li>
                    <img src="/images/map_logo.svg" />
                  </li>
                  <li>
                    <img src="/images/phone_logo.svg" />
                  </li>
                  <li>
                    <img src="/images/mail_logo.svg" />
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col justify-between py-3 space-y-7 text-white items-center">
                  <li className="max-w-sm">
                    Tilottama-2,Yogikuti Rupendehi Nepal
                  </li>
                  <li className="max-w-sm">
                    +977-00071-437659, +977-071-438559
                  </li>
                  <li className="max-w-sm">info@tilottama.edu.np</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Social Media</h1>
          <ul className="text-center flex gap-2 mx-auto">
            <li className="w-[2rem] h-[2rem] bg-white text-black rounded-full p-1">
              F
            </li>
            <li className="w-[2rem] h-[2rem] bg-white text-black rounded-full p-1">
              T
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[48px] flex flex-col justify-center items-center bg-[#FF9900] text-white font-bold text-center">
        © Copyright 2023 Tilottama Campus, Rupandehi All Rights Reserved
      </div>
    </Container>
  );
};

export default Footer;

{
  /* <div className='flex flex-col space-y-6 md:space-y-2  text-white justify-center items-center'>
<h1 className='font-bold text-2xl'>Join our mailing list</h1>
<span className='font-extralightlight mx-auto max-w-sm md:max-w-lg text-center'>Subscribe to get our weekly newsletter delivered directly to your inbox</span>
<div className='flex space-x-2 justify-center '>
    <input className=' w-1/2 md:w-[30rem]  pl-[1rem] rounded-md text-black'  placeholder='Enter your email'></input>
    <button className='w-[8rem] text-xl tracking-wide transition-all duration-150 h-[3rem] border-2 border-[#FF9900] p-2 px-5 rounded-xl  hover:bg-[#FF9901] active:border-none' >Subscribe</button>
</div>
</div> */
}
