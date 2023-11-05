import React, { useState } from "react";
import { sendSubscribeUserData } from "../../../../pages/api/wordpress_API";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { subscribeFormSchema } from "../../yupSchemas";

const initialValues = {
  input_1: "",
  input_3: "",
  input_4: "",
};

const NewsLetter = () => {
  // Show form submission confirmed  message
  const [showConfirmMessage, setShowConfirmedMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  // State to hold user data
  // const [data, setData] = useState({
  //   input_1: "",
  //   input_3: "",
  //   input_4: "",
  // });
  // console.log(data);

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: subscribeFormSchema,
      onSubmit: async (values, action) => {
        // console.log("values", values);
        setLoading(true);
        try {
          // Send data to gravity forms
          const res = await sendSubscribeUserData(values);

          // console.log("res", res);
          if (res?.status === 200 && res?.data?.is_valid) {
            setShowConfirmedMessage(true);
            setLoading(false);
            toast.success("Thank you for subscribing to our newsletter");
            action.resetForm();
          }
        } catch (error) {
          console.log("Error", error);
        }
      },
    });

  return (
    <>
      {" "}
      {loading ? (
        <h1 className="text-5xl font-amithen text-secondary-orange text-center ">
          Sending...
        </h1>
      ) : (
        <>
          {showConfirmMessage ? (
            <div className=" flex flex-col lg:flex lg:flex-row space-y-5 md:space-y-0  justify-center items-center text-white">
              {loading ? (
                <h1 className="text-5xl font-amithen text-secondary-orange ">
                  Loading...
                </h1>
              ) : (
                <h1 className="text-5xl font-amithen ">
                  Thank you for
                  <span className="font-amithen text-5xl text-secondary-orange">
                    {" "}
                    subscribing
                  </span>{" "}
                  to our newsletter
                </h1>
              )}
            </div>
          ) : (
            <div className=" flex flex-col space-y-5 lg:flex lg:flex-row justify-between  lg:space-y-0   text-white">
              <div className=" md:mr-10  text-center md:text-start   ">
                <p className="font-amithen text-3xl md:text-5xl ">
                  Missed anything,
                </p>
                <p>
                  <span className="text-secondary-orange font-amithen text-3xl md:text-5xl">
                    Subscribe
                  </span>{" "}
                  <span className="font-amithen text-3xl md:text-5xl">
                    to stay updated
                  </span>
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className=" w-full lg:w-auto space-y-5  md:space-y-0 space-x-0 lg:space-x-4 flex  flex-col justify-center items-center lg:flex lg:flex-row "
              >
                <div className="w-full space-y-5 md:space-y-0 md:flex space-x-0 md:space-x-5">
                  {/* First Name */}
                  <div className="w-full lg:w-auto">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="input_1"
                      className="h-14 w-full lg:w-48 text-black placeholder-secondary-light-light-gray placeholder:text-xs  rounded-md px-4 py-2  focus:outline-none"
                      value={values.input_1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.input_1 && touched.input_1 && (
                      <p className="text-red-500 text-xs mt-2">
                        {errors.input_1}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="w-full lg:w-auto">
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="input_3"
                      className="h-14 w-full lg:w-48 text-black placeholder-secondary-light-light-gray placeholder:text-xs  rounded-md px-4 py-2  focus:outline-none"
                      value={values.input_3}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.input_3 && touched.input_3 && (
                      <p className="text-red-500 text-xs mt-2">
                        {errors.input_3}
                      </p>
                    )}
                  </div>

                  {/* Email  */}
                  <div className="w-full lg:w-auto">
                    <input
                      type="email"
                      placeholder="Enter address"
                      name="input_4"
                      className="h-14 w-full  lg:w-72 text-black placeholder-secondary-light-light-gray placeholder:text-xs  rounded-md px-4 py-2 focus:outline-none"
                      value={values.input_4}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.input_4 && touched.input_4 && (
                      <p className="text-red-500 text-xs mt-2">
                        {errors.input_4}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:w-auto flex justify-end lg:justify-start">
                    <button
                      onClick={handleSubmit}
                      className=" bg-secondary-orange h-14 w-32   text-white text-xs md:text-base px-4 py-2  rounded-md focus:outline-none"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(NewsLetter);
