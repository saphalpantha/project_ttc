import React, { useState, useEffect } from "react";
import classes from "./Portal.module.css";
import CancelIcon from "@mui/icons-material/Cancel";
const InternalResultPortal = ({ isOpen, onClose, result }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const closeModal = () => {
    onClose();
  };

  // if (!isClient || !isOpen) return null;

  const excludedKeys = [
    "percentage",
    "roll_no",
    "class",
    "section",
    "stream",
    "dob",
    "id",
    "total",
  ];

  const getMarks = () => {
    return Object.entries(result)
      .filter(([key, value]) => {
        return (
          !excludedKeys.includes(key) &&
          value !== "" &&
          value !== undefined &&
          value != "null"
        );
      })
      .map(([key, value]) => {
        if (value !== null) {
          return (
            <tr className="grid  grid-cols-2 px-2 md:px-[7rem]" key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        }
      });
  };
  return (
    <>
      {console.log(result, "from model")}
      <div className={classes.backdrop} onClick={closeModal} />
      <div className={`${classes.modal}`}>
        <div className={classes["close-icon"]} onClick={closeModal}>
          <CancelIcon style={{ width: "2rem", height: "2rem" }} />
        </div>
        <div
          className={`${classes["image-container"]} border-2 border-gray-400`}
        >
          {result ? (
            <div className="w-[80vw] md:w-[50vw] h-[100%]  px-2 py-10 md:px-15 md:py-5 flex flex-col justify-center items-center gap-5">
              <h1 className=" text-xl whitespace-nowrap md:text-2xl">
                Result of Roll:
                <span className="font-semibold text-[#201F54]">
                  {" "}
                  {result.roll_no}
                </span>
              </h1>

              <span className="font-semibold text-3xl">
                <h1>{`Percentage: ${parseFloat(result.percentage)}%`}</h1>
              </span>

              <table className="border border-[2px] border-black  w-full">
                <caption className="text-xl"> Marks</caption>
                <tbody className="flex gap-1 px-2 py-2 flex-col">
                  <th className="grid grid-cols-2 gap-2 px-2 md:px-[7rem]">
                    <td>Subject</td>
                    <td>ObtainedMarks</td>
                  </th>
                  {getMarks().map((i) => i)}
                </tbody>
              </table>
            </div>
          ) : (
            <h1>No Result found for this Student</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default InternalResultPortal;
