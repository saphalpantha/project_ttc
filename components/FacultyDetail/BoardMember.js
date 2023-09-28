import React from "react";
import FacultyCard from "./FacultyCard";
import BoardCard from "./BoardCard";
const users = [
  {
    id: "i1",
    name: "Dr Ram Chandra Dhakal",
    phoneNo: "+977-9812367458",
    post: "President",
    photo: "board1",
  },
  {
    id: "i2",
    name: "Prof. Dr. Ram Chandra Acharya",
    phoneNo: "+977-9812367458",
    post: "Vice Principle",
    photo: "board2",
  },
  {
    id: "i3",
    name: "Mr Bhoj Raj Bhattarai",
    phoneNo: "+977-9812367458",
    post: "Member",
    photo: "board3",
  },
  {
    id: "i3",
    name: "Mr Badri Panthi",
    phoneNo: "+977-9812367458",
    post: "member",
    photo: "board4",
  },
  {
    id: "i4",
    name: "Mr Shiva Prasad Gyawali",
    phoneNo: "+977-9812367458",
    post: "member",
    photo: "board5",
  },
];

const BoardMember = () => {
  return (
    <div className="flex flex-col gap-14 pb-[5rem] justify-center items-center">
      <section
        id="board_members"
        className="md:max-w-[60.313] mx-auto py-[3rem] md:py-[1rem] justify-center items-center max-w-6xl"
      >
        <div className="flex flex-col justify-between space-y-10 ">
          <h1 className=" text-white bg-[#FF9900] font-semibold text-2xl md:text-3xl text-center  ">
            BOARD MEMBERS
          </h1>
          <div className="grid grid-cols-1 px-4  md:grid-cols-5 justify-between items-center mx-auto gap-10">
            {users.map((i) => (
              <BoardCard
                name={i.name}
                post={i.post}
                photo={i.photo}
                isBig={true}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="md:max-w-[60.313] mx-auto py-[1rem] md:py-[1rem] justify-center items-center max-w-6xl">
        <div className="flex flex-col justify-between space-y-10 ">
          <h1 className="  text-white bg-[#FF9900]  py-1 font-semibold text-2xl md:text-3xl text-center  ">
            Message From Founder Principal
          </h1>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:items-start  items-center md:gap-10 px-2 md:px-0 md:space-y-0 space-y-3">
            <div className=" flex flex-col space-y-2 w-[20rem] h-[25rem] py-2 pt-[3rem]">
              <img
                className="w-[100%] h-[100%]"
                src="/images/board/founder.jpg"
              ></img>
              <span className="font-bold text-[#201F54] tracking-wide text-center">
                Dr Ram Chandra Acharya
              </span>
              <span className="text-center">Founder Principal</span>
            </div>

            <p className=" text-center md:text-start text-justify px-[2rem] max-w-xl leading-8 tracking-wide">
              {" "}
              Tilottama campus, established in 2053 has exemplified excellence
              in science and mangaement by providing quality and value based
              education. This year we are going to enroll 25th batch in +2
              Science and Management.These days, Tilottama Campus is chosen not
              only by the toppers in SEE but also by the guardians because of
              its consistency in quality education, disciplinary and friendly
              environment. The incredible blending of excellent physical
              infrastructure and its proficient team of brilliant, experienced
              and committed faculty members are major attractions at Tilottama.
              The campus passionately nurtures the talent of students with the
              best feasible holistic and professional platform in order to make
              them competent to surpass the multiple needs and ethos of the
              scientific and corporate world.I am sure that all the students are
              looking for an outstanding, scholarly acade mic enviornment and
              quality campus facilities, that shall be found at Tilottama
              campus. Moreover, the ambitions of the newly enrolled students
              will be successfully fulfilled at Tilottama. I welcome you all to
              achieve your cherished goals and explore your potential by
              becoming a part as well as the member of this prestigious college.
            </p>
          </div>
        </div>
      </section>
      <section className="md:max-w-[60.313] mx-auto py-[3rem] md:py-[1rem] justify-center items-center max-w-6xl">
        <div className="flex flex-col justify-between space-y-10 ">
          <h1 className="  text-white bg-[#FF9900]  py-1 font-semibold text-2xl md:text-3xl text-center  ">
            Message From Vice-Principal
          </h1>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:items-start  items-center md:gap-10 px-2 md:px-0 md:space-y-0 space-y-3">
            <div className="flex flex-col space-y-2 w-[20rem] h-[25rem]">
              <img src="/images/board/vice_2.jpg"></img>
              <span className="font-bold text-[#201F54] tracking-wide text-center">
                Mr Navendu Dhakal
              </span>
              <span className="text-center">Vice Principal</span>
            </div>

            <p className="md:text-start text-justify px-[2rem] max-w-xl leading-8 tracking-wide">
              {" "}
              I am immensely pleased to welcome you at Tilottama Campus. The
              Campus is popularly known not only throughout the nation but also
              throughout the world. The campus strives for academic excellence
              through the delivery of student centered education in the best
              possible environment. We aim for a holistic approach to educate
              our students by providing, creating and maintaining quality,
              friendly and disciplinary situation.Tilottama Campus is home for
              students willing to meet challenges intellectual boundaries. Each
              student is encouraged to challenge ideas, exploring the class to a
              wide assortment of perspectives. This helps them think
              independently, reason effectively and learn successfully.The
              campus provides an accredited learning experience along with
              in-depth personal and professional development with the students
              who have already making their mark in their chosen careers. The
              campus is pleased and proud to welcome you to be an integral part
              of our academic institution.
            </p>
          </div>
        </div>
      </section>
      <section className="md:max-w-[60.313] mx-auto py-[2rem] md:py-[1rem] justify-center items-center max-w-6xl">
        <div className="flex flex-col justify-between space-y-10 ">
          <h1 className="  text-white bg-[#FF9900]  py-1 font-semibold text-2xl md:text-3xl text-center  ">
            Message From Vice-Principal
          </h1>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:items-start  items-center md:gap-10 px-2 md:px-0 md:space-y-0 space-y-10">
            <div className="flex flex-col space-y-2 w-[20rem] h-[27rem] py-2 pt-[3rem]">
              <img src="/images/board/vice_principle.jpg"></img>
              <span className="font-bold text-[#201F54] tracking-wide text-center">
                Mr Mukunda Acharya
              </span>
              <span className="text-center">Vice Principal</span>
            </div>

            <p className="md:text-start text-justify px-[2rem] max-w-xl leading-8 tracking-wide">
              {" "}
              I respect you for your interest at Tilottama Campus. We understand
              the challenges facing your generation and guide you properly to
              overcome with the challenges. Our endeavors to create a nurturing
              environment will extremely support you to discover the best that
              is possessed in you.After your visit or reach at Tilottama, you
              will meet highly qualified and experienced faculty members. You
              will get chance to develop a network of friends that will be an
              important asset for your whole life. Moreover, the opportunities
              to involve in varieties of activities conducted at Tilottama will
              enhance you to explore your potentiality and creativity that might
              be proven a milestone for your advancement and progress.I welcome
              you at Tilottama Campus. Please come, visit us and check my words
              whether they are found in reality or not.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardMember;
