import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Container from "../Container/Container";
import NewsNoticePageCard from "./NewsNoticePageCard";
import classes from "../AdmissionDetail/AdmissionDetail.module.css";
import styles from './NewsNoticePage.module.css'
import Loader from "../UI/Loader/Loader";


const NewsNoticePage = ({newsData}) => {
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  
  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = newsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsData.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <div className="max-w-6xl md:max-w-full">
        <section className={` relative ${classes.main}`}>
          <div className="">
          <img
              className="object-contain w-[100vw] bg-contain opacity-100 "
              src="/images/cover_newsnotice.png"
            ></img>
          </div>
          <div className="left-[50%] font-bold mx-auto w-[80%] bg-[#FF9900] py-2 font-bold text-2xl text-center text-white rounded-full">
            News And Notice
          </div>
          <div className="mx-auto  justify-center max-w-[75%]  flex flex-col gap-14 md:gap-10 pt-20">
             { currentItems.length >  0 ? currentItems.map((i) => (
              <NewsNoticePageCard para={i.para} id={i.id} heading={i.heading} img={i.img_code} />
            )) : <div className="flex flex-col mx-auto mb-[2rem] justify-center items-center"> <Loader/> </div>}
          </div>
        </section>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          containerClassName={styles.pagination}
          pageLinkClassName={styles['page-num']}
          renderOnZeroPageCount={null}
          previousLinkClassName={styles['page-num']}
          nextLinkClassName={styles['page-num']}
          activeClassName="active"
        />
      </div>
    </Container>
  );
};

export default NewsNoticePage;
