import React from 'react'
import classes from './Backdrop.module.css'
const Backdrop = ({onClick}) => {
  return (
    <div className={`${classes.backdrop} flex md:hidden`}  onClick={onClick}></div>
  )
}

export default Backdrop