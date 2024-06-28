import axios from 'axios';

const getMyData = async (compo_data) => {
  try {
    const { _api_main, _api_sec } = compo_data;
    const res = await axios.get(`${_api_main}`);
    const d = res.data.msg;
    const detailPromises = d.map(async (item) => {
      if (item.photo || item.cover_image) {
        try {
          const res = await axios.get(`${_api_sec}/${item.photo || item.cover_image}`);
          const data = res.data;
          if (data.msg && data.ext) {
            const imgFile = `data:image/${data.ext};base64, ${data.msg}`;
            return { ...item, img_code: imgFile };
          }
        } catch (err) {
          console.error('Error fetching item details:', err);
          return null; 
        }
      } else {

        return item;
      }
    });


    const updatedDataArray = await Promise.all(detailPromises);


    const filteredDataArray = updatedDataArray.filter(Boolean);

    return filteredDataArray;
  } catch (err) {
    console.error('Error fetching main data:', err);
    return [];
  }
};

export default getMyData;
