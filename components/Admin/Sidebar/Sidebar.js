import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
const Sidebar = () => {



  const sidebar_data = [
    {id:'i1', title:'Dashboard',icon:'dashboard', link:'dashboard'},
    {id:'i2', title:'Result',icon:'result', link:'result'},
    {id:'i3', title:'AdmissionForm',icon:'edit_form_sidebar', link:'admission-forms'},
    {id:'i3', title:'News and Notice',icon:'edit_form_sidebar', link:'newsnotice'},
    {id:'i4', title:'Our Star',icon:'edit_form_sidebar', link:'ourstar'},
    {id:'i5', title:'Add User',icon:'edit_form_sidebar', link:'/user/add-user'},
    {id:'i5', title:'Change Password',icon:'edit_form_sidebar', link:'/user/change-password'},
    {id:'i6', title:'Gallary',icon:'edit_form_sidebar', link:'/gallary'},
    {id:'i6', title:'Spotlight',icon:'edit_form_sidebar', link:'/spotlight'},
    {id:'i6', title:'Faculty',icon:'edit_form_sidebar', link:'/faculty'},
  ]
  const logoutHandler = async () => {
    await signOut({redirect:true})
  }
  return (
    <div className="items-center fixed   h-[100vh] overflow-y-scroll  justify-center place-items-center flex flex-col justify-between py-5 min-h-screen fixed bg-[#201F54] w-[19%] z-10">
      <div className="flex flex-col py-1 justify-center  items-center px-2">
        <img className="" src="/images/sidebar_logo.svg"></img>
        <div className="flex flex-col gap-4 pt-[2rem] justify-center justify-between">
            {sidebar_data.map(i => (  <Link href={`/admin/${i.link}`}>
            <div className={`flex   py-2 flex-row  gap-5 justify-start px-3  hover:bg-[#576A9E] rounded-sm`}>
            <img className="w-[1.5rem]  h-[1.5rem]" src={`/images/${i.icon}.svg`}></img>
            <h1 className="text-white text-[1rem] text-justify ">{i.title}</h1>
          </div>
            </Link> 
          ))}
        </div>

      </div>
        <div className="flex gap-2 z-10">
            {/* <img className="w-[1.5rem] h-[1.5rem]" src="/images/gear.svg"></img> */}
            <h1 onClick={logoutHandler} className="text-white px-5 py-2.5 rounded-3xl cursor-pointer hover:border-2 border-[#fff] transition-all duration-100 ease">LogOut</h1>
          </div>
    </div>
  );
};

export default Sidebar;
