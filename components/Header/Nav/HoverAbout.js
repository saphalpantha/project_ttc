import React from 'react'
import classes from './HoverAbout.module.css'
import Link from 'next/link'
const HoverAbout = () => {
  return (
    <div className={classes.container}>
        <div className={classes.links}>
        <ul className={classes.inside_links} >
          <Link href="/about">
            <li>About Tilottama</li>
          </Link>
            <li>Board Members</li>
            <Link href={"/faculty"}><li>Faculty & Staffs</li></Link>
            <li>Gallery</li>
        </ul>
        </div>
    </div>
  )
}

// export default HoverAbout
// import React from 'react'
// import classes from './HoverAbout.module.css'
// import Link from 'next/link'
// const HoverAbout = () => {
//   return (
//     <div className={classes.container}>
//         <div className={classes.links}>
//             <select>
//               <option>
//                 A
//               </option>
//             </select>
//         </div>
//     </div>
//   )
// }

// export default HoverAbout