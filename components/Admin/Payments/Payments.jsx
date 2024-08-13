import { React, useState, useRef, useEffect } from "react";
import { CSVLink } from "react-csv";
import ReactToPrint from "react-to-print";
const dummyData =  [
  {id:'t1', email:'sfajos@gmail.com', receipt:'1723385689006_ico.png'},
  {id:'t2', email:'sfajos@gmail.com', receipt:'1723385689006_ico.png'},
  {id:'t3', email:'sfajos@gmail.com', receipt:'1723385689006_ico.png'},
  {id:'t4', email:'sfajos@gmail.com', receipt:'1723385689006_ico.png'},
  {id:'t5', email:'sfajos@gmail.com', receipt:'1723385689006_ico.png'},
]

import PaymentUserFormat from "./PaymentUserFormat";
const PaymentForms = () => {
  const [paymentResult, setPaymentResult] = useState(dummyData);
  const [selectedItem, setSelectedItem] = useState();
  const componentRef = useRef();
  const printComponentRef = useRef();



  // useEffect(() => {
  //   fetch("/api/payments") // Fetch payment data instead of admission forms
  //     .then((result) => result.json())
  //     .then((data) => {
  //       setPaymentResult(data.data.msg);
  //     })
  //     .catch((err) => {}).finally(() => {
  //       setPaymentResult(dummyData)
  //     })
  // }, []);



  const selectedItemHandler = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className="min-h-screen py-10 flex bg-[#F0F0F0] w-[100vw] pl-[22%] flex-col pr-[3rem]">
      <div className="flex justify-between px-[2rem]">
        <div className="flex gap-4">
          <h1 className="text-[#201F54] font-bold">Payments</h1>
          <img className="w-[2rem] h-[2rem]" src="/images/edit_form.svg"></img>
        </div>
      </div>

      <div className="flex gap-4 py-5 justify-end">
        <div className="flex w-[20%] justify-center items-center gap-2 shadow-md bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/download.svg"></img>
          <CSVLink data={paymentResult} filename="paymentForms">
            Download
          </CSVLink>
        </div>
        <div className="flex w-[20%] gap-2 shadow-md justify-center items-center bg-white rounded-xl py-2 px-8 font-bold tracking-wide">
          <img className="w-[2rem] h-[2rem]" src="/images/print.svg"></img>
          <ReactToPrint
            trigger={() => {
              return <button className="">Print</button>;
            }}
            content={() => printComponentRef.current}
          />
        </div>
      </div>

      <div
        ref={printComponentRef}
        className={`rounded-xl pb-[3rem] bg-white h-auto w-[100%]`}
      >
        <div className="font-semibold">
          <div className="flex justify-between px-[3rem] pt-[2rem]">
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/formno.svg"
              ></img>
              <h1>Payment No</h1>
              <img
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/student_name.svg"
              ></img>
              <h1>Student Email</h1>
              <img
                className="w-[1.3rem] h-[1.3rem] cursor-pointer"
                src="/images/table_icon.svg"
              ></img>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/faculty.svg"
              ></img>
              <h1>Payment Receipt</h1>
            </div>
            <div className="flex gap-2">
              <img
                className="w-[1.3rem] h-[1.3rem]"
                src="/images/status.svg"
              ></img>
              <h1>Status</h1>
            </div>
          </div>
        </div>
        <div className="px-[3rem] flex flex-col">
          <span className="block w-[100%] h-[0.09rem] mx-auto bg-[#D2CCCC] mt-8"></span>
          {paymentResult.map((i) => (
            <div
              key={i.id}
              className="flex justify-between items-center px-[1rem] pt-[2rem]"
            >
              <span className="max-w-sm w-[55%]">{i.id}</span>
              <span className="max-w-sm w-[100%]">{i.email}</span>
              <span className="max-w-sm w-[50%]">

                  <img className="w-1/3" src={`/images/payment-uploads/${i.receipt}`}/>
              </span>
              <div>
                <div className="" key={i.id} onMouseEnter={() => selectedItemHandler(i)}>
                  <ReactToPrint
                    key={i.id}
                    trigger={() => {
                      return (
                        <button className="text-justify cursor-pointer text-[#B65E0C]">
                          Download
                        </button>
                      );
                    }}
                    content={() => componentRef.current}
                  />
                </div>
              </div>
              <div className="hidden">
                <PaymentUserFormat ref={componentRef} data={selectedItem} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentForms;
