import { Fragment, forwardRef } from "react";

const PaymentUserFormat = forwardRef((props, ref) => {
//   const { id, email, receipt } = props.data;

  const id  = '1'
  const email = 'aosi@gmail.com'
  const receipt = '1723385689006_ico.png';

  return (
    <Fragment>
      <div ref={ref} className="p-4 text-[2rem]">
        <div className="text-lg text-[2.5rem] font-bold">Payment Details</div>
        <div className="grid grid-cols-1 gap-10 justify-center items-center pt-[1rem]">
          <div className="w-full flex flex-col gap-2">
            <label className="mr-2 font-bold">Payment ID:</label>
            <div className="text-gray-800">{id}</div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="mr-2 font-bold">User Email:</label>
            <div className="text-gray-800">{email}</div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="mr-2 font-bold">Payment Receipt:</label>
            {receipt ? (
              <img
                className="w-[100%] h-[100%] object-cover bg-gray-300 rounded-md"
                src={`/images/payment-uploads/${receipt}`}
                alt="Payment Receipt"
              />
            ) : (
              <div className="text-red-500">No receipt available</div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

export default PaymentUserFormat;
