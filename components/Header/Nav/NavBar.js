import { useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
import React from "react";

function NavLink({ to, children }) {
  return (
    <Link className={`block py-2 px-7 ${styles.navLink}`} href={to}>
      {children}
    </Link>
  );
}

function DropdownMenu({ title, links }) {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleDropdown = (itemId) => {
    if (openMenus.includes(itemId)) {
      setOpenMenus(openMenus.filter((menuId) => menuId !== itemId));
    } else {
      setOpenMenus([...openMenus, itemId]);
    }
  };

  const isDropdownOpen = (itemId) => {
    return openMenus.includes(itemId);
  };

  return (
    <div className={`relative ${styles.dropdownMenu}`}>
      <button
        className={`block py-2 px-6 ${styles.navLink} ${styles.dropdownButton}`}
        onClick={() => toggleDropdown(title)}
      >
        {title}
      </button>
      {isDropdownOpen(title) && (
        <div className={`dropdown border-t-2 border-blue-800 ${styles.dropdown}`}>
          {links.map((link) => (
            <div key={link.id} className={`dropdownLink ${styles.dropdownLink}`}>
              {link.sublinks ? (
                <>
                  <button
                    className={` py-2 px-4 ${styles.dropdownButton} ${isDropdownOpen(link.id) ? styles.active : ''}`}
                    onClick={() => toggleDropdown(link.id)}
                  >
                    {link.name}
                  </button>
                  {isDropdownOpen(link.id) && (
                    <div className={`dropdown-menu  ${styles.subDropdownMenu}`}>
                      {link.sublinks.map((sublink) => (
                        <Link className={`dropdown-item  px-10 tracking-widest text-2xs ${styles.dropdownLink}`} key={sublink.id} href={sublink.link}>
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link className={`dropdown-item ${styles.dropdownLink}`} key={link.id} href={link.link}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isSciOpen, setIsSciOpen] = useState(false);
  const [isMgmtOpen, setIsMgmtOpen] = useState(false);
  const [isBBAOpen, setIsBBAOpen] = useState(false);

  const aboutDropdownLinks = [
    { id: "a1", link: "/about", name: "About Tilottama" },
    { id: "a2", link: "/board", name: "Board Members" },
    { id: "a3", link: "/faculty", name: "Faculty & Staffs" },
    { id: "a4", link: "/gallary", name: "Gallery" },
  ];
  const resultsDropdownLinks = [
    { id: "a1", link: "/", name: "Internal Exam Result" },
    { id: "a2", link: "/", name: "NEB Grade XI Result" },
    { id: "a3", link: "/", name: "NEB Grade XII Result" },
    { id: "a4", link: "/", name: "Entrance Exam Result" },
  ];
  const othersDropdownLinks = [
    { id: "a1", link: "/", name: "Prepation Materials" },
    { id: "a2", link: "/", name: "Gallary" },
    { id: "a3", link: "/", name: "Item-3" },
  ];

  const coursesDropdownLinks = [
    {
      id: "a1",
      name: "Science",
      sublinks: [
        { id: "s1", link: "/courses/science/introduction", name: "Introduction" },
        { id: "s2", link: "/courses/science/admission", name: "Admission Procedure" },
        { id: "s3", link: "/", name: "Scholarship and Fee Structure" },
        { id: "s4", link: "/faculty/#faculty_science", name: "Faculty Members" },
      ],
    },
    {
      id: "a2",
      name: "Management",
      sublinks: [
        { id: "s1", link: "/courses/management/introduction", name: "Introduction" },
        { id: "s2", link: "/courses/management/admission", name: "Admission Procedure" },
        { id: "s3", link: "/", name: "Scholarship and Fee Structure" },
        { id: "s4", link: "/faculty/#faculty_management", name: "Faculty Members" },
      ],
    },
    {
      id: "a3",
      name: "BBA",
      sublinks: [
        { id: "s1", link: "/courses/bba/introduction", name: "Introduction" },
        { id: "s2", link: "/courses/bba/admission", name: "Admission Procedure" },
        { id: "s3", link: "/", name: "Scholarship and Fee Structure" },
        { id: "s4", link: "/faculty/#faculty_bba", name: "Faculty Members" },
      ],
    },
  ];

  return (
    <nav
      className={`flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center z-50 ${styles.navbar}`}
    >
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out filter drop-shadow-md ${
          styles.mobileNav
        }`}
      >
        <div
          className={`flex items-center justify-center filter drop-shadow-md bg-white h-20 ${styles.mobileNavHeader}`}
        >
          <a className="text-xl font-semibold" href="/">
            TTC
          </a>
        </div>
        <div className={`flex flex-col mt-8 ${styles.mobileNavLinks}`}>
          <NavLink
            to="/about"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Home
          </NavLink>
          {/* <NavLink to="/contact" onClick={() => setTimeout(() => setOpen(!open), 100)}>
            About
          </NavLink> */}
          <DropdownMenu title="About" links={aboutDropdownLinks} />
          <DropdownMenu title="Courses" links={coursesDropdownLinks} />
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Admission
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Result
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Notice
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setTimeout(() => setOpen(!open), 100)}
          >
            Others
          </NavLink>
        </div>
      </div>
      <div className={`w-3/12 flex items-center ${styles.logo}`}>
        <a className="text-2xl font-semibold" href="/">
          TTC
        </a>
      </div>
      <div className={`w-9/12 flex md:justify-start justify-end items-center ${styles.menu}`}>
        <div
          className={`z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden ${styles.hamburger}`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>
        <div className={`hidden md:flex ${styles.desktopMenu}`}>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/about" >About</NavLink> */}
          <DropdownMenu title="About" links={aboutDropdownLinks} />
          <DropdownMenu title="Courses" links={coursesDropdownLinks} />
          <NavLink to="/admissions" >Admission</NavLink>
          <DropdownMenu title="Results" links={resultsDropdownLinks} />
          <NavLink to="/about">Notice</NavLink>
          <DropdownMenu title="Others" links={othersDropdownLinks} />
        </div>
      </div>
    </nav>
  );
}

// ===================================================================================================================================
