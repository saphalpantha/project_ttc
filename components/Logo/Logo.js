import React from 'react'
import Image from 'next/image'
import { Link } from '@mui/material'
const Logo = ({w,h}) => {
  return (
    <Link href='/'>
      <div className={` p-[2rem] md:p-[0rem] w-[20rem]   h-[7rem] md:w-fit  md:h-fit`} >
        <img  className='w-[100%] h-[100%] object-cover' src="/images/ttc_logo.svg" alt="TTC"></img>
      </div>
    </Link>
  )
}

export default Logo






// import React from 'react'
// import Image from 'next/image'
// const Logo = ({w,h}) => {
//   return (
//       <div className='w-2/3 h-[7rem] md:h-full md:w-fit'>
//         <img  className='w-[100%] h-[100%]' src="/images/ttc_logo.svg" alt="TTC"></img>
//       </div>
//       // <div className={``} >
//       // </div>
//   )
// }

// export default Logo

