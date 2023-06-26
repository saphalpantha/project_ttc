export const getAllNotice =  async () => {
    try{
      const res =  await fetch('/api/news-notice/');
      const data  = await res.json();
      console.log('from func gel all',data)
      return data.msg;
    }
    catch(err){
      console.log('error from getallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',err);
      return err;
    }
  }
  
  export const getSingleNotice = async (id) => {
    const allNotice = await getAllNotice();
    const singleNews = allNotice.find(item => item.id === id);
    console.log(singleNews)
    return singleNews;
  }