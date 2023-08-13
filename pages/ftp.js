import React, { useEffect } from 'react'

const ftp = () => {
    useEffect(() => {
        fetch('/api/ftp').then(response => response.json()).then(data => console.log(data)).catch(err => {
            console.log(err);
        })
    })
  return (

    <div>ftp</div>
  )
}

export default ftp