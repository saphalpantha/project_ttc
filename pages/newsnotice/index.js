import React from "react";
import useGetData from "../../components/Helper/Helper";
import dynamic from "next/dynamic";
const NewsNoticePage = dynamic(() => import ('../../components/NewsNotice/NewsNoticePage'))
// const data = [
//   {
//     id: "n1",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n2",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n2",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n4",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n5",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n5",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n6",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
//   {
//     id: "n7",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
// ];

const newsNotice = () => {
  const state_data = {
    _api_main:'/api/news-notice/',
    _api_sec:'/api/get-images/notice-uploads/',
  }
  const notice = useGetData(state_data);
  if(!notice){
    return;
  }

  
  return (
    <div>
      <NewsNoticePage newsData={notice} />
    </div>
  );
};

export default newsNotice;
