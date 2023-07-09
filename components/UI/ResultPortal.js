import React, { useState, useEffect } from 'react';
import classes from './Portal.module.css'
import CancelIcon from '@mui/icons-material/Cancel';
const Modal = ({ isOpen, onClose, result }) => {
  const [isClient, setIsClient] = useState(false);
  

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
    <div className='w-[100%] h-[100%]  px-20 py-20  flex flex-col justify-center items-center gap-5'>
        <h1 className='text-2xl'>Result of Roll:<span className='font-semibold text-[#201F54]'> {result.entrance_roll}</span></h1>
        <span className='font-semibold text-3xl'>
            {result.result === 1 ? 'Pass' : 'Fail'}
        </span>
        <h1 className='text-2xl' >obtained marks : <span className='font-bold text-2xl' >{result.obtained_marks} </span></h1>
    </div>

  </div>
</div>
    </>
  );
};

export default Modal;



