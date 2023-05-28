import React from 'react'
import classes from './HoverCourse.module.css'
import Link from 'next/link'
const HoverCourse = () => {
  return (
    <div className={classes.container}>
        <div className={classes.links}>
        <ul className={classes.inside_links} >
            <span>Science </span>
            <Link href="/courses/science/introduction">
            <li>Introduction</li>
            </Link>
            <Link href={"/courses/science/admission"}>
            <li >Admission Procedure</li>
            </Link>
            <li>Schoolarship and Fee Structure</li>
            <Link href={"/faculty/#faculty_science"}>
            <li>Faculty Members</li>
            </Link>
        </ul>
        <ul className={classes.inside_links}>
           <span>Management </span>
           <Link href="/courses/management/introduction">
            <li>Introduction</li>
            </Link>
            <Link href={"/courses/management/admission"}>
            <li >Admission Procedure</li>
            </Link>
            <li>Schoolarship and Fee Structure</li>
            <Link href={"/faculty/#faculty_management"}>
            <li>Faculty Members</li>
            </Link>
        </ul>
        <ul className={classes.inside_links}>
            <span>BBA </span>
            <Link href="/courses/bba/introduction">
            <li>Introduction</li>
            </Link>
            <Link href={"/courses/bba/admission"}>
            <li >Admission Procedure</li>
            </Link>
            <li>Schoolarship and Fee Structure</li>
            <Link href={"/faculty/#faculty_science"}>
            <li>Faculty Members</li>
            </Link>

        </ul>
        </div>
    </div>
  )
}

export default HoverCourse