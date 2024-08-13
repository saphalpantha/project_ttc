import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      receipt: null,
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.receipt) {
        errors.receipt = 'Payment receipt image is required';
      }
      return errors;
    },
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append('email', values.email);
      formData.append('receipt', values.receipt);

      try {
        const response = await axios.post('/api/payments', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response)
        alert('Form Submitted Successfully');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again.');
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-full bg-[#F4F8FA] min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-full w-[32rem] p-8 pb-[2rem] mx-auto border-[#DCDCDC] bg-[#FFFFFF] rounded-xl">
        <h1 className="text-[#201F54] text-xl md:text-2xl font-semibold">
          Payment
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="w-[100%] h-[100%]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png"
              alt="QR Code"
            />
          </div>
          <span className="w-[100%] font-semibold text-[0.8rem] text-center text-red-700">
            Make payment of Rs.1000 as per admission fees in the given QR above. Please mention your email address in the remarks section of payment to get the admit card.
          </span>
        </div>
        <form className="flex pt-[1rem] flex-col gap-2" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-[#494949]">
              E-mail address as mentioned in remarks <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              className={`border-[1px] border-[#DCDCDC] w-full h-[2.5rem] rounded-md ${formik.errors.email ? 'border-red-700' : ''}`}
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-red-700">{formik.errors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[#494949]">
              Payment Receipt (Image) <span className="text-red-700 text-2xl">*</span>
            </label>
            <input
              className={`border-[1px] border-[#DCDCDC] w-full h-[2.5rem] rounded-md ${formik.errors.receipt ? 'border-red-700' : ''}`}
              name="receipt"
              type="file"
              accept="image/*"
              onChange={(event) => formik.setFieldValue('receipt', event.currentTarget.files[0])}
            />
            {formik.errors.receipt && formik.touched.receipt && (
              <span className="text-red-700">{formik.errors.receipt}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="text-center md:col-span-2 mx-auto active:bg-[#3F3BCB] justify-center transition-all duration-200 ease-in-out hover:bg-[#635eff] rounded-xl text-white font-bold items-center w-fit px-8 bottom-10 h-[2.5rem] bg-[#3F3BCB]"
          >
            {loading ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
