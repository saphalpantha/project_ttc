import React from 'react'

const Container = (props) => {
  return (
    <div className=' container max-w-6xl md:max-w-[1440px] lg:max-w-[2333px]  mx-auto'>{props.children}</div>
  )
}

export default Container