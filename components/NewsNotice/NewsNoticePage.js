import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Container from "../Container/Container";
import NewsNoticePageCard from "./NewsNoticePageCard";
import classes from "../AdmissionDetail/AdmissionDetail.module.css";
import styles from './NewsNoticePage.module.css'


const NewsNoticePage = ({newsData}) => {
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = newsData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(newsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newsData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <div className="max-w-6xl md:max-w-full">
        <section className={` relative ${classes.main}`}>
          <div className="">
            <img
              className="w-[100vw] h-[30vh] bg-cover opacity-80  "
              src="/images/stream/science/sci_stream_cover.png"
            ></img>
          </div>
          <div className="left-[50%] font-bold mx-auto w-[80%] bg-[#FF9900] py-2 font-bold text-2xl text-center text-white rounded-full">
            News And Notice
          </div>
          <div className=" mx-auto flex flex-col gap-2 md:gap-10">
            {currentItems.map((i) => (
              <NewsNoticePageCard para={i.para} id={i.id} heading={i.heading} img={i.img} />
            ))}
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
