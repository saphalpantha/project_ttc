import React, { useEffect, useState } from "react";
import classes from "./Dashboard.module.css";
import Link from "next/link";

const EventCard = ({ img, title, count }) => {
  return (
    <div className=" py-2 min-w-[14rem] items-center justify-center gap-[1rem]  flex justify-between px-2 bg-[#1C2E5A] rounded-md">
      <img className="w-[2.5rem]  h-[2.5rem]" src={`/images/${img}.svg`}></img>
      <div className="flex px-2 flex-col text-white gap-2">
        <h1 className="text-4xl text-center font-bold">{count}</h1>
        <h1 className="text-[1rem] whitespace-nowrap">{title}</h1>
      </div>
    </div>
  );
};

const OthersCard = ({ img, title, link }) => {
  return (
    <Link href={link}>
      <div className=" bg-[#3B5CAB]  py-2 w-[11rem] items-center justify-center flex-col gap-2  flex justify-between px-2 bg-[#1C2E5A] rounded-md">
        <img
          className="w-[2.3rem]  h-[2.3rem]"
          src={`/images/${img}.svg`}
        ></img>
        <h1 className="text-[1rem] text-white  whitespace-nowrap">{title}</h1>
      </div>
    </Link>
  );
};

const others = [
  { id: "i1", title: "Publish Result", img: "result", link: "/admin/result" },
  {
    id: "i1",
    title: "Add Spotlight",
    img: "spotlight",
    link: "/admin/spotlight",
  },
  {
    id: "i1",
    title: "Add News & Notice",
    img: "megaphone",
    link: "/admin/newsnotice",
  },
  {
    id: "i1",
    title: "Gallery Settings",
    img: "gallery",
    link: "/admin/gallary",
  },
  { id: "i1", title: "Add Stars", img: "star", link: "/admin/ourstar" },
];

const Dashboard = () => {
  const [totalAdmissions, setTotalAdmissions] = useState(0);
  const [totalScience, setTotalScience] = useState(0);
  const [totalManagement, setTotalManagement] = useState(0);
  const [totalBBA, setTotalBBA] = useState(0);
  const [latestDate, setLatestDate] = useState(0);
  useEffect(() => {
    // console.log(isAdmissionOpen, 'ADM C OR O')
    fetch("/api/admission-forms")
      .then((result) => result.json())
      .then((data) => {
        const allForms = data.msg;
        setTotalAdmissions(allForms.length);
        setTotalScience(allForms.filter((i) => i.faculty == "Science").length);
        setTotalManagement(
          allForms.filter((i) => i.faculty == "Management").length
        );
        setTotalBBA(allForms.filter((i) => i.faculty == "BBA").length);
        const latestFormDate = allForms[allForms.length - 1].created_at;
        // console.log(allForms[allForms.length-1],'the latest form')
        const lastDate = new Date(latestFormDate).getFullYear();
        setLatestDate(lastDate);
      })
      .catch((err) => {});
  }, []);

  const events = [
    {
      id: "i1",
      title: "Total Admission Form",
      count: totalAdmissions,
      img: "total-admission",
    },
    {
      id: "i2",
      title: "Science Form",
      count: totalScience,
      img: "total-science",
    },
    {
      id: "i3",
      title: "Management Form",
      count: totalManagement,
      img: "total-management",
    },
    { id: "i4", title: "BBA Form", count: totalBBA, img: "bba-form" },
  ];

  return (
    <div className={`flex   flex-col min-h-screen gap-10 ${classes.main}`}>
      <div className="flex gap-4  items-center ">
        <img
          className="w-[2rem] h-[2rem]"
          src={"/images/dashboard-icon.svg"}
        ></img>
        <h1 className="text-[#201F54] font-bold">Dashboard</h1>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-[18px]">{`Admission Forms Year ${latestDate} `}</h1>

        <div className="flex flex-shrink-1 flex-wrap  gap-4">
          {events.map((i) => (
            <EventCard img={i.img} count={i.count} title={i.title} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[18px]">Others Features</h1>

        <div className="flex flex-shrink-1 flex-wrap  gap-4">
          {others.map((i) => (
            <OthersCard img={i.img} title={i.title} link={i.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
