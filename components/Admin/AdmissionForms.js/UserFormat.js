import { Fragment, forwardRef, useEffect, useState } from "react";
import classes from "./AdmissionForms.module.css";
import Link from "next/link";
export const PrintButton = ({ className, title }) => {
  return (
    <button className={className} onClick={printButtonHandler}>
      {title}
    </button>
  );
};

const printButtonHandler = () => {
  window.print();
};

const UserFormat = forwardRef((props, ref) => {
  const {
    faculty,
    grade,
    shift,
    nameinblock,
    nameindevanagari,
    dob_bs,
    dob_ad,
    gender,
    t_no,
    p_no,
    email,
    ward_no,
    vdc_mun,
    district,
    fathers_name,
    fathers_occupation,
    fathers_cellno,
    mothers_name,
    mothers_occupation,
    mothers_cellno,
    localgurdain_name,
    localgurdain_occupation,
    localgurdain_cellno,
    bus_faculty,
    bus_stop,
    nameofprevschool,
    sendUpGpa,
    see_cgpa,
    grade_div,
    sendup_eng,
    sendup_cmath,
    sendup_optmath,
    sendup_science,
    sendup_account,
    see_eng,
    see_cmath,
    see_optmath,
    see_science,
    see_account,
    others,
    formisChecked,
    photo,
    see_cc,
    see_tc,
    see_marksheet,
  } = props.data;

  console.log(props.data);
  return (
    <Fragment>
      <div ref={ref}>
        <div className={`p-4`}>
          <div className="text-lg font-bold mb-4">Form Result</div>
          <div className="grid grid-cols-3 gap-5 justify-center items-center">
            <div className="flex items-center">
              <label className="mr-2">Faculty:</label>
              <span>{faculty}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Grade:</label>
              <span>{grade}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Shift:</label>
              <span>{shift}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Name in Block Letter:</label>
              <span>{nameinblock}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Name in Devanagari:</label>
              <span>{nameindevanagari}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">DOB (BS):</label>
              <span>{dob_bs}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">DOB (AD):</label>
              <span>{dob_ad}</span>
            </div>
            <div className="flex items-center">
              <label className="mr-2">Gender:</label>
              <span>{gender}</span>
            </div>
          </div>
        </div>

          <div className="text-lg font-bold mb-4">Permanent Address:</div>
        <div className="p-4 grid grid-cols-3 gap-6 justify-center items-center">
          <div className="mt-4 ">
            <div className="mb-2">
              <label className="font-semibold">Ward:</label>
              <p className="text-gray-800">{ward_no}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-2">
              <label className="font-semibold">VDC/Municipality:</label>
              <p className="text-gray-800">{vdc_mun}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="mb-2">
              <label className="font-semibold">District:</label>
              <p className="text-gray-800">{district}</p>
            </div>
          </div>
        </div>
          <div className="text-lg font-bold mb-4">
            Family / Extra Information
          </div>
        <div className="bg-gray-100 p-4 grid grid-cols-3 gap-5 justify-center items-center">
          <div className="mb-4">
            <div>
              <label className="font-bold">Father's Name:</label>
              <p>{fathers_name}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Occupation:</label>
              <p>{fathers_occupation}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Cell No:</label>
              <p>{fathers_cellno}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Mother's Name:</label>
              <p>{mothers_name}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Occupation:</label>
              <p>{mothers_occupation}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Cell No:</label>
              <p>{mothers_cellno}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Tel no Residence:</label>
              <p>{t_no}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Mobile no:</label>
              <p>{p_no}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Email ID:</label>
              <p>{email}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Local Guardian's Name:</label>
              <p>{localgurdain_name}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Occupation:</label>
              <p>{localgurdain_occupation}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Cell No:</label>
              <p>{localgurdain_cellno}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Ward:</label>
              <p>{ward_no}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">VDC/Municipality:</label>
              <p>{vdc_mun}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">District:</label>
              <p>{district}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Bus Facility:</label>
              <p>{bus_faculty}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Bus Stop:</label>
              <p>{bus_stop}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Name of Previous School:</label>
              <p>{nameofprevschool}</p>
            </div>
          </div>
          <div className="mb-4">
            <div>
              <label className="font-bold">Send-up CGPA:</label>
              <p>{sendUpGpa}</p>
            </div>
          </div>
          {/* <div className="mb-4">
      <div>
      <label className="font-bold">Board of Exam:</label>
      <p>{'NEB'}</p>
      </div>
    </div> */}
          {/* <div className="mb-4">
      <div>
      <label className="font-bold">CGPA: Grade Point</label>
      <p>{gradepoint}</p>
      </div>
    </div> */}
          {/* <div className="mb-4">
      <div>
      <label className="font-bold">Grade Letter:</label>
      <p>{gradeletter}</p>
      </div>
    </div> */}
        </div>

        <div>
          <table className="py-[5rem]">
            <tbody>
              <tr>
                <td colspan="7">
                  <label className="underline">
                    Grade of the Major Subject
                  </label>
                </td>
              </tr>
              <tr className="flex justify-center items-start gap-5">
                <td colspan="2">Subject</td>
                <td>English</td>
                <td>C. Math</td>
                <td>Opt. Math</td>
                <td>Science</td>
                <td>Account</td>
              </tr>
              <tr className="flex justify-center items-start gap-10">
                <td>SEE</td>
                <td>{see_eng}</td>
                <td>{see_cmath}</td>
                <td>{see_optmath}</td>
                <td>{see_science}</td>
                <td>{see_account}</td>
              </tr>
              <tr>
                <td colspan="7">
                  <label className="underline">
                    (Please attach the copies of Mark sheet, T.C. and C.C)
                  </label>
                </td>
              </tr>
              <tr className="flex justify-center items-center">
                <td className="p-5" colspan="3">

                  <Link href={'/'}><label className="block text-blue-900">SEE Marksheet</label></Link>

                </td>
                <td className="p-5" colspan="2">
                  <label className="block text-blue-900">SEE T.C.</label>
                </td>
                <td  className='p-5' colspan="2">
                  <label className="block text-blue-900">SEE C.C.</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className="p-4 grid grid-cols-1 gap-10 justify-center items-center ">
          <div>
            <div>
              <label className="block mb-2">
                Interest on extra activities:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label for="basketball" className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="basketball"
                    name="interest"
                    value="1"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Basket Ball</span>
                </label>
                <label for="volleyball" className="inline-flex items-center">
                  <input
                    type="checkbox"
                    id="volleyball"
                    name="interest"
                    value="2"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Volley Ball</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="3"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">TT</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="4"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Football</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="5"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Cricket</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="6"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Chess</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="7"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Quiz</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="8"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Poem/Essay/Story Etc.</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <input
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="9"
                    name="interest"
                    disabled="disabled"
                    className="form-checkbox"
                  />
                  <span className="ml-2">Speech Competition</span>
                </label>
                <label
                  for="inlineCheckbox1"
                  className="inline-flex items-center"
                >
                  <span className="ml-2">Others:</span>
                </label>
                <div>
                  <input
                    type="text"
                    name="others"
                    id="others"
                    disabled="disabled"
                    value=""
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label for="declare" className="block mt-4">
              <input
                type="checkbox"
                checked="checked"
                id="declare"
                value="1"
                required="required"
                disabled="disabled"
                className="form-checkbox"
              />
              <span className="ml-2">
                I hereby declare that above provided data is correct. Form
                Cannot be edited after submission.
              </span>
            </label>
          </div>
          <div>
            <div>
              <label for="filledby" className="block mt-4">
                Form Filled By:
              </label>
              <input
                type="text"
                name="filledby"
                id="filledby"
                required="required"
                placeholder="Enter Name"
                disabled="disabled"
                value={nameinblock}
                className="form-input"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default UserFormat;
