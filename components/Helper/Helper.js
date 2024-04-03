
// import { useState, useEffect } from "react";

// const initalState = {
//   state: [],
// };
// const useGetData = (compo_data) => {
//   const [updatedData, setUpdatedData] = useState(initalState);

//   useEffect(() => {
//     stateHandler();
//   }, [0]);

//   const stateHandler = async () => {
//     let final_data = [];

//     try {
//       const { _api_main, _api_sec } = compo_data;

//       const res = await fetch(`${_api_main}/`);
//       const res_data = await res.json();
//       const d = res_data.msg;
//       // return d;
//       d.map(async (i) => {
//         try {
//           const res = await fetch(`${_api_sec}/${i.photo}`);
//           if (!res.ok) {
//             return null;
//           }
//           const data = await res.json();
//           if (data.msg && data.ext) {
//             const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
//             let updatedItem = { ...i, img_code: imgFile };
//             final_data.push(updatedItem);
//           }
//         } catch (err) {
//           // console.log(err);
//         } finally {
//           setUpdatedData((prev) => {
//             return {
//               state: final_data,
//             };
//           });
//         }
//       });
//     } catch (err) {
//       // console.log(err);
//     }
//   };
//   return updatedData.state;
// };

// export default useGetData;




import { useState, useEffect } from "react";

const initialState = {
  state: [],
};

const useGetData = (compo_data) => {
  const [updatedData, setUpdatedData] = useState(initialState);

  useEffect(() => {
    stateHandler();
  }, []);

  const stateHandler = async () => {
    try {
      const { _api_main, _api_sec } = compo_data;

      // Fetch main data first
      const res = await fetch(`${_api_main}`);
      const res_data = await res.json();
      const d = res_data.msg;

      // Create an array of promises for each item's details
      const detailPromises = d.map(async (i) => {
        if (i.photo || i.cover_image) {
          try {
            const res = await fetch(`${_api_sec}/${i.photo || i.cover_image}`);
            if (!res.ok) {
              return null; // Return null for failed fetches
            }
            const data = await res.json();
            if (data.msg && data.ext) {
              const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
              return { ...i, img_code: imgFile };
            }
          } catch (err) {
            console.error(err);
            return null; // Return null for errors
          }
        } else {
          // No photo or cover_image, return the item as is
          return i;
        }
      });

      // Wait for all detail promises to resolve
      const updatedDataArray = await Promise.all(detailPromises);

      // Filter out null values (failed fetches)
      const filteredDataArray = updatedDataArray.filter(Boolean);

      setUpdatedData({ state: filteredDataArray });
    } catch (err) {
      console.error(err);
    }
  };

  return updatedData.state;
};

export default useGetData;