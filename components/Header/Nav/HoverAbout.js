import React from 'react'
import classes from './HoverAbout.module.css'
const HoverAbout = () => {
  return (
    <div className={classes.container}>
        <div className={classes.links}>
        <ul className={classes.inside_links} >
            <li>About Tilottama</li>
            <li>Board Members</li>
            <li>Faculty & Staffs</li>
            <li>Gallery</li>
        </ul>
        </div>
    </div>
  )
}

export default HoverAbout