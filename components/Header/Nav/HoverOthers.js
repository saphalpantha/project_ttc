import React from 'react'
import classes from './HoverAbout.module.css'
import Link from 'next/link'
const HoverOthers = () => {
  return (
    <div className={classes.container}>
        <div className={classes.links}>
        <ul className={classes.inside_links} >
           <Link href="/results"> <li>RESULTS</li> </Link>
            <li>Preparation Materials</li>
        </ul>
        </div>
    </div>
  )
}

export default HoverOthers