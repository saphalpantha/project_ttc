import React, { useState, useEffect } from 'react';
import classes from './Portal.module.css'
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
const Modal = ({ isOpen, onClose, img }) => {
  const [isClient, setIsClient] = useState(false);
  console.log(img,'imgsssssss')
  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeModal = () => {
    onClose();
  };

  if (!isClient || !isOpen) return null;

  return (
    <>
     <div className={classes.backdrop} onClick={closeModal} />
<div className={classes.modal}>
  <div className={classes["close-icon"]} onClick={closeModal}>
    <CancelIcon style={{width:'2rem', height:'2rem'}}/>
  </div>
  <div className={`${classes["image-container"]} border-2 border-gray-400`}> 
    {/* <img className='w-[100%] h-[100%]' src={img} alt="first Image" /> */}
    {/* <div className='text-xl p-5 w-[50vw] md:w-[30vw]' >
      Students are requested to follow the following  bus schedule for Morning, Midday &  Day shift of Tilottama Campus
      <br></br>
      <a className='text-blue-900' href='https://m.facebook.com/story.php?story_fbid=pfbid0uZuAYqhoBURd6ESj61uVkJKiZpf7r3GTMguFYVgU6NLaxtGbouLENJ3rj3ekRPcrl&id=100083559392986&mibextid=Nif5oz'>Click Here to Follow</a>
    </div>  */}
    <div className='w-[100%] h-[100%] px-4 bg-contain object-contain'>
    <img className='w-[100%] h-[100%]' src={`${img.slice(-1)[0]?.img_code}`} alt="Loading.." />
    </div>

  </div>
</div>
    </>
  );
};

export default Modal;



