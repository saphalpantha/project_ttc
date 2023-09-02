import Link from 'next/link';
import React from 'react'
// import ScrollLayout from '../UI/ScrollLayout';
// const Card = ({img, title, admission_status}) => {
//   return (
//     <div className=' w-[382px] h-[216px] shadow-md bg-[#FFFFFF] flex  items-center justify-center flex-col space-y-6'>
//         <div className='w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] '>
//              <img className='w-[100%] h-[100%] text-black' src={`/images/${img}.svg`} alt={title} />
//         </div>
//         <h1 className='text-gray-400 font-light text-xl' >{`${title}`} <span className='text-red-500 font-bold text-2xs'>{admission_status && `(${admission_status})`}</span></h1>
//     </div>
//   )
// }

// export default Card



// w-[20rem] h-[10rem] md:w-[24rem] md:h-[13.5rem]



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import  Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function Card({img, title, admission_status}) {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//       <div className=''>
//         <div className='w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] '>
//              <img className='w-[100%] h-[100%] text-black' src={`/images/${img}.svg`} alt={title} />
//         </div>
//         <h1 className='text-gray-400 font-light text-xl' >{`${title}`} <span className='text-red-500 font-bold text-2xs'>{admission_status && `(${admission_status})`}</span></h1>
//     </div>
//       </CardContent>
//     </Card>
//   );
// }








// ========================================================================


import Card from 'react-bootstrap/Card';
import ScrollLayout from '../UI/ScrollLayout';

const SingleCard = ({img, title, admission_status , link}) =>  {
  console.log(admission_status ,' from the card')
  return (
    <Card className='' style={{ width: '22rem' , height:'13.5rem' }}>
      <Card.Body>
       
      <Link href={link ? link :'/'}>
        <ScrollLayout duration={1.5}>

      <div className=' w-[23rem] h-[13.5rem] shadow-md hover:bg-gray-200 bg-[#FFFFFF] flex  items-center justify-center flex-col space-y-6'>
         <div className='w-[2rem] h-[2rem] md:w-[4rem] md:h-[4rem] '>
              <img className='w-[100%] h-[100%] text-black' src={`/images/${img}.svg`} alt={title} />
         </div>

         <Card.Title className='text-gray-400 font-light text-xl' >{`${title}`} { title === 'Admission' &&  <span className='text-red-500 font-bold text-2xs'>{ admission_status ? `(Open)` : '(Closed)'}</span>}</Card.Title>
     </div>
        </ScrollLayout>
      </Link>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;