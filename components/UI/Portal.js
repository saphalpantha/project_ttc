import React, { useState, useEffect } from 'react';
import classes from './Portal.module.css'
import CancelIcon from '@mui/icons-material/Cancel';
const Modal = ({ isOpen, onClose, img }) => {
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
    <CancelIcon/>
  </div>
  <div className={`${classes["image-container"]} border-2 border-gray-400`}>
    <div className='w-[100%] h-[100%] px-5 bg-contain object-contain'>
    <img className='w-[100%] h-[100%]' src={img} alt="first Image" />
    </div>

  </div>
</div>
    </>
  );
};

export default Modal;



