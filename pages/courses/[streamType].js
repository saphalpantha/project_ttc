import React from 'react'
import StreamDetailLayout from '../../components/StreamDetail/StreamDetailLayout'
import { useRouter } from 'next/router'
import BbaStream from '../../components/StreamDetail/BbaStream';



const StreamDetail = () => {

  const router = useRouter();
  const id = router.query.streamType;
  
  console.log(id);
  
  return (
    <div>
      {/* <StreamDetailLayout/> */}
        {id === "science" || id === "management" ?  <StreamDetailLayout/>  : '' }
        {id === 'bba'  && <BbaStream/>  }
    </div>
  )
}



export default StreamDetail
// export const getStaticProps = async (context) => {
//  console.log(context.params.streamType)
//   return{
//   props:{
//     msg:'hello'
//   },
//   fallback:true,
//  }
// }

