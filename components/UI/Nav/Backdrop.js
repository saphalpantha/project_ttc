import React from 'react'
import classes from './Backdrop.module.css'
const Backdrop = ({onClick}) => {
  return (
    <div className={`${classes.backdrop} flex `}  onClick={onClick}></div>
  )
}

export default Backdrop