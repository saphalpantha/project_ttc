import React from "react";
import Link from "next/link";
import Container from "../Container/Container";
import classes from './Footer.module.css'
const Footer = () => {
  return (
    <Container>
      <div className={`max-w-6xl flex flex-col md:max-w-full  items-center justify-center  pb-[2rem] pt-[2rem] ${classes.footer}`}>
        <div className="md:max-w-full  flex flex-col md:flex-row  md:justify-between px-0 px-[4rem] py-2  md:py-4 justify-center items-center space-y-6 md:space-y-0  gap-5 md:gap-x-32">
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
            <h1 className="text-white font-bold text-3xl max-w-md whitespace-nowrap ">
              Quick Links
            </h1>
            <div>
              <ul className="flex flex-col list-none py-2 space-y-3 font-light list-disc   text-white justify-center text-2xs">
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
          
            <div className="text-white flex flex-col gap-y-2 md:gap-y-4 pt-[2rem] justify-center items-center">
              <h1 className="text-3xl font-bold text-white ">Contact Us</h1>
              <span className="flex gap-5"> <img src="/images/phone_logo.svg"></img> +977-00071-437659</span>
              <span className="flex gap-5 pt-2"> <img src="/images/phone_logo.svg"></img> +977-071-438559</span>
              <span className="flex gap-5 pt-2"> <img src="/images/mail_logo.svg"></img> info@tilottama.edu.np</span>
              <span className="flex gap-5 pt-2"> <img src="/images/map_logo.svg"></img> Tilottama-2, Yogikuti Rupandehi Nepal</span>
            </div>
          
        </div>

        <div className="flex flex-col justify-between items-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Social Media</h1>
          <ul className="text-center flex gap-2 mx-auto justify-center items-center flex">
            <li className="w-[2rem] h-[2rem] bg-transparent text-white rounded-full p-1">
              <img className="w-[100%] h-[100%]" src="/images/sl_1.svg"></img>
            </li>
            <li className="w-[2rem] h-[2rem] bg-transparent text-white rounded-full p-1">
              <img className="w-[100%] h-[100%]" src="/images/sl_2.svg"></img>
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
