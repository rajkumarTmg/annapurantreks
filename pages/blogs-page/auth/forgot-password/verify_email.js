import React from "react";
import { toast } from "react-toastify";




const EmailVerify = () => {
  const handleSubmit = () => {
    toast.error("Error! This feature is in progress!");
  };
  return (
    <>
      <div className="my-[25vh]">
        <div className="text-center">
          <h1 className="text-base font-semibold my-4">
            {" "}
            Reset code will be sent to Your Email
          </h1>
          <input
            type="email"
            placeholder="Enter Your Email"
            className=" focus:outline-none rounded-xl py-2 px-4 shadow-lg "
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="border  focus:outline-none bg-gradient-to-r from-red-300 to-red-500 rounded-2xl shadow-xl px-9   py-2 font-bold m-3 hover: transform hover:scale-110  hover:shadow-xl "
          >
            Send Code
          </button>
        </div>
      </div>
    </>
  );
};

export default EmailVerify;
