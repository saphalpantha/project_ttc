// import { useState,useEffect } from "react";
// let final_data = [];

// const initalState = {
//   state:[],
// }
// const useGetData = (compo_data) => {
//     const [updatedData, setUpdatedData] = useState(initalState);
    
//     useEffect(() => {
//       stateHandler()
//     },[])
    
    
//     const stateHandler =  async () => {
//       try{
//           const {_api_main, _api_sec} =  compo_data;
//             const res = await fetch(`${_api_main}/`);
//             const res_data = await res.json();
//             const d = res_data.msg
//         d.map(async i=>{
//           try{
  
//             const res = await fetch(`${_api_sec}/${i.photo}`);
//             if(!res.ok){
//               return null;
//             }
//             const data = await res.json();
//             if (data.msg && data.ext) {
//               const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
//               let  updatedItem  =  { ...i, img_code: imgFile };
//               final_data.push(updatedItem)
//             }
//           }
//           catch(err){
//             console.log(err);
//           }
//           finally{
//             setUpdatedData(prev => {
//               return{
//                 state:final_data
//               }
//             });
//           }
//         })
         
//       }
//       catch(err){
//         console.log(err);
//       }
//     }
//     return updatedData.state
// }

// export default useGetData;



import { useState,useEffect } from "react";


const initalState = {
  state:[],
}
const useGetData = (compo_data) => {
    const [updatedData, setUpdatedData] = useState(initalState);
    
    useEffect(() => {
      stateHandler()
    },[0])

    
    
    const stateHandler =  async () => {
      let final_data = [];
      
      try{
          const {_api_main, _api_sec} =  compo_data;
          
            const res = await fetch(`${_api_main}/`);
            const res_data = await res.json();
            const d = res_data.msg
        d.map(async i=>{
          try{
  
            const res = await fetch(`${_api_sec}/${_api_sec === '/api/get-images/gallary/' ? i.cover_image : i.photo }`);
            if(!res.ok){
              return null;
            }
            const data = await res.json();
            if (data.msg && data.ext) {
              const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
              let  updatedItem  =  { ...i, img_code: imgFile };
              final_data.push(updatedItem)
            }
          }
          catch(err){
            // console.log(err);
          }
          finally{
            setUpdatedData(prev => {
              return{
                state:final_data
              }
            });
          }
        })
         
      }
      catch(err){
        // console.log(err);
      }
    }
    return updatedData.state
}

export default useGetData;






// import { useState, useEffect } from "react";

// const initialState = {
//   state: [],
// };

// const useGetData = (compo_data) => {
//   const [updatedData, setUpdatedData] = useState(initialState);

//   useEffect(() => {
//     stateHandler();
//   }, []);

//   const stateHandler = async () => {
//     try {
//       const { _api_main, _api_sec } = compo_data;
//       console.log(compo_data)
//       const res = await fetch(`${_api_main}`);
//       const res_data = await res.json();
//       const d = res_data.msg;

//       const updatedDataArray = await Promise.all(
//         d.map(async (i) => {
//           try {
//             const res = await fetch(`${_api_sec === '/api/get-images/gallary/' ? i.cover_image : i.photo}`);
            
//             if (!res.ok) {
//               return null;
//             }
//             const data = await res.json();
//             if (data.msg && data.ext) {
//               const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
//               return { ...i, img_code: imgFile };
//             }
//           } catch (err) {
//             console.error(err);
//           }
//         })
//       );

//       const filteredDataArray = updatedDataArray.filter(Boolean);

//       setUpdatedData({ state: filteredDataArray });
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return updatedData.state;
// };

// export default useGetData;
