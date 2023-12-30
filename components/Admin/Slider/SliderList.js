import React, { Fragment, useEffect, useRef, useState } from 'react'
import Preloader from '../../UI/Preloader';
import useGetData from '../../Helper/Helper';
import axios from 'axios';



const SliderList = (props) => {


  
  const state_data = {
    _api_main:'/api/slider/get',
    _api_sec:'/api/get-images/slider-uploads/',
  }

  const [updatedSlider,setUpdatedSlider] = useState(props.list || []);
  const [change, setChange] = useState(false);
  const [loading,setLoading] = useState(false);

  const handleCheckboxChange = (id) => {
    setChange(true);
    let newArray = props.list;
  
    // Find the index of the item in the array
    const index = newArray.findIndex(i => i.id === id.id);
  
    // If the item is found, update its key property
    if (index !== -1) {
        newArray[index].active = !id.active ;
      // Assuming props.list is a state variable, update it
      console.log(newArray,'nw')
      setUpdatedSlider([...newArray])  
    }
  };

  const finishHandler = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
  
      const dataArray = updatedSlider.map(slider => {
        const { img_code, ...rest } = slider;
        return rest;
      });
  
      await axios.put(`/api/slider/edit`, { dataArray }, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        setLoading(false);
        alert('Successfully Uploaded!');
        console.log(response);
      }).catch((err) => {
        setLoading(false);
        console.log(err);
      });
    } catch (err) {
      setLoading(false);
      alert('Form not submitted');
      console.log(err);
    }
  };
  


  return (
    <div>
 <table className={`w-[83%] my-[2rem] mx-auto`}>
    <tbody className="flex pt-[1rem] flex-col border-[2px] h-[75vh]  overflow-y-scroll ">
        <tr className="flex justify-between gap-[10rem]">
        <th className="flex-1">S.N</th>
            <th className="flex-[1.3]">Image</th>
            <th className="flex-[1.3]">Active/Hide</th>
        </tr>
        {props.list.map((i, indx) => {
            return (  
              <Fragment>
                
                  <tr key={i.id} className="flex justify-between  mx-[3.8rem] gap-[10rem] py-4">
                    <td  className="">{indx + 1}</td>
                    <td  className="object-cover">
                      {/* <img
                        className="w-[5rem]  object-cover h-[5rem]"
                        src={`/images/faculty-uploads/${i.img_code}`}
                      /> */}
                      <img
                        className="  w-[5rem] object-cover h-[5rem]"
                        src={`${i.img_code}`}
                      />
                    </td>
                    <input
  onChange={() => {
    handleCheckboxChange(i)
  }}
  className='w-[1.5rem] h-[1.5rem]'
  type='checkbox'
  checked={i.active}
/>
                  </tr>
            
              </Fragment>
            );
          })}
    </tbody>
</table>
          <div className='w-[100%] flex flex-col'>

    <button onClick={finishHandler} disabled={!change}  type='submit' className={`border-2 mx-auto cursor-pointer  border-[#201F54] opacity-100 px-6 py-2 w-fit ${change ? 'bg-[#201F54] text-white ' : ' cursor-not-allowed opacity-[0.5]' }`}>{!loading ? 'Finish Changes' : 'Finishing Changes'}</button>
          </div>
    </div>
  )
}

export default SliderList






// ================================================================================================================


