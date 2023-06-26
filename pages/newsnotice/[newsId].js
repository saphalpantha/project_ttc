import newsNotice from ".";
import Container from "../../components/Container/Container";
import React from "react";
import { getAllNotice, getSingleNotice } from "../../util";


// const newsData = [
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
//     id: "n3",
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
//   {
//     id: "n8",
//     img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     heading: "Consectetur aliqua cillum",
//     para: "Enim non enim id commodo eiusmod minim ipsum veniam sit mollit cupidatat.Veniam reprehenderit non aute occaecat enim nostrud aliqua anim labore aliquip eu laboris elit.Aute voluptate excepteur consectetur cupidatat.Quis ea nostrud voluptate excepteur deserunt incididunt duis eu duis pariatur commodo fugiat.Do laboris elit in ipsum exercitation cillum dolore mollit laboris laborum id.Ullamco deserunt id adipisicing eu excepteur.Ex eu pariatur esse occaecat aliquip officia proident non quis esse eiusmod ullamco minim.",
//   },
// ];

const NewsDetail = (props) => {

  
    console.log('the propppppppppppppppppppppppppppppppppppppppppppppppp' ,props)
  return (
    <Container>
      <div className="flex flex-col justify-center mx-2 mx:px-32 gap-5 items-center py-[2rem] pb-[5rem]">
        <div className=" h-[50vh] md:h-[100vh]">
          <img className="w-[100%] h-[100%]" src={props.singleNews.photo}></img>
        </div>
        <div className="flex flex-col space-y-2 px-2 md:px-0 max-w-7xl justify-center items-center gap-10">
          <h1 className="text-3xl text-[#201F54] text-center font-bold">{props.singleNews.heading}</h1>
          <p className="tracking-wide  text-2xs  md:text-xl  w-[100%] mx-auto  leading-9 tracking-wider">
           {props.singleNews.para}
          </p>
        </div>
      </div>
    </Container>
  );
};





export const getStaticProps = async (context) => {
  const id = parseInt(context.params.newsId);
  const getSingleNotice = await getSingleNotice(id);
    return{ 
    props:{
      singleNews:getSingleNotice,
    },
    revalidate:3600,
  }
}

export const getStaticPaths = async () => {
  const allItems = await getAllNotice();
  console.log(allItems)
  console.log('from prevvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', allItems)
  const paths = allItems.map(item => ({params:{newsId:item.id}}));
  return{
    paths:paths,
    fallback:false,
  }
}


export default NewsDetail;
