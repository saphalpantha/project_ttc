// import React, { useState } from 'react';
// import { MenuItems } from './MenuItems';
// import { Link } from 'next/link';
// import classes from './Dropdown.module.css'
// function Dropdown() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   return (
//     <>
//       <ul
//         onClick={handleClick}
//         className={click ? classes['dropdown-menu clicked'] : classes['dropdown-menu']}
//       >
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className={item.cName}
//                 href={item.path}
//                 onClick={() => setClick(false)}
//               >
//                 {item.title}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// }

// export default Dropdown;