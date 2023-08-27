const jwt = require('jsonwebtoken');
export const getAllNotice =  async () => {
    try{
      const res = await fetch('/api/news-notice/');
      const data  = await res.json();
      return data.msg;
    }
    catch(err){
      return err;
    }
  }
  
  export const getSingleNotice = async (id) => {
    const allNotice = await getAllNotice();
    const singleNews = allNotice.find(item => item.id === id);
    return singleNews;
  }




