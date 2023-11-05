import React, { useState } from "react";
import {
  getCountriesNameData,
  sendBookingConfirmationFormData,
} from "../../../../pages/api/wordpress_API";
import { toast } from "react-toastify";
import renderHTML from "react-render-html";
import { useFormik } from "formik";
import { bookingFormSchema } from "../../yupSchemas";
import AnimatedSection from "../../Animations/AnimatedSection";

const BookingForm = ({ imageUrl, title, days, nights, costDetails }) => {
  // const [countries, setCountries] = React.useState([]);

  // // Fetch countries name api
  // useEffect(() => {
  //   fetchCountriesData();
  // }, []);

  // const fetchCountriesData = async () => {
  //   try {
  //     const { data } = await getCountriesNameData();
  //     console.log("data", data.data);
  //     setCountries(data?.data);
  //   } catch (error) {
  //     console.log("Error=>", error);
  //   }
  // };

  // form data state
  // const [formData, setFormData] = useState({
  //   input_11: title,
  //   input_1: "",
  //   input_3: "",
  //   input_4: "",
  //   input_5: "",
  //   input_6: "",
  //   input_7: "",
  //   input_8: "",
  //   input_9: "",
  //   input_10: "",
  // });
  // console.log(formData);
  const [loading, setLoading] = useState(false);
  const [showConfirmedMessage, setShowConfirmedMessage] = useState(false);

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        input_11: title,
        input_1: "",
        input_3: "",
        input_4: "",
        input_5: "",
        input_6: "",
        input_7: "",
        input_8: "",
        input_9: "",
        input_10: "",
      },
      validationSchema: bookingFormSchema,
      onSubmit: async (values, action) => {
        // console.log("values", values);
        setLoading(true);
        try {
          // Send data to gravity forms
          const res = await sendBookingConfirmationFormData(values);
          // console.log("res", res);
          if (res?.status === 200 && res?.data?.is_valid) {
            setShowConfirmedMessage(true);
            setLoading(false);
            toast.success("Thank you for subscribing to our newsletter");
            action.resetForm();
          }
        } catch (error) {
          // console.log("Error", error);
        }
      },
    });

  return (
    <>
      {loading ? (
        <h1 className="text-5xl font-amithen text-secondary-orange mt-10 md:mt-20">
          Sending...
        </h1>
      ) : (
        <>
          {showConfirmedMessage ? (
            <h1 className=" mt-10 md:mt-20 font-amithen text-5xl text-black">
              Thank you for Booking. We will get back to you soon.
            </h1>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="w-full ">
                <h1 className="text-xl md:text-3xl font-amithen py-2 mt-10 md:mt-20 ">
                  {" "}
                  Personal Info
                </h1>
                <div className="space-y-5">
                  <div className=" space-y-5 md:space-y-0 md:flex md:space-x-5">
                    {/* First */}
                    <div className="md:space-y-1">
                      <p className="text-xs md:text-base">First Name</p>
                      <input
                        type="text"
                        placeholder=""
                        name="input_1"
                        className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
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
                    <div className="md:space-y-1">
                      <p className="text-xs md:text-base">Number of people</p>
                      <input
                        type="text"
                        placeholder=""
                        name="input_3"
                        className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
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
                  </div>
                  <div className="  space-y-5 md:space-y-0  md:flex md:space-x-5">
                    <div className="space-y-1">
                      <p className="text-xs md:text-base">Email </p>
                      <input
                        type="text"
                        placeholder=""
                        name="input_4"
                        className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
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
                    <div className="space-y-1">
                      <p className="text-xs md:text-base">Country</p>
                      {/* <select
                name="country"
                // value={signUpData.country}
                onChange={(e) => {
                  setSignUpData({
                    ...signUpData,
                    country: e.target.value,
                  });
                }}
                className="text-gray-400 px-3 w-[30vh] py-1 focus:outline-none shadow-md border-gray-300 rounded-xl cursor-pointer"
              >
                <option>Select your country</option>
                {countries?.map((data, i) => {
                  return (
                    <option key={i} value={data?.country}>
                      {data?.country}
                    </option>
                  );
                })}
              </select> */}
                      <input
                        type="text"
                        placeholder=""
                        name="input_5"
                        className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
                        value={values.input_5}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.input_5 && touched.input_5 && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.input_5}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className=" space-y-5 md:space-y-0 md:flex md:space-x-5">
                    {/* Address */}
                    <div className="md:space-y-1">
                      <p className="text-xs md:text-base">Address </p>
                      <input
                        type="text"
                        placeholder=""
                        name="input_6"
                        className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
                        value={values.input_6}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.input_6 && touched.input_6 && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.input_6}
                        </p>
                      )}
                    </div>

                    {/* Phone Number*/}
                    <div className="md:space-y-1">
                      <p className="text-xs md:text-base">Phone number</p>
                      <input
                        type="text"
                        placeholder=""
                        name="input_7"
                        className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
                        value={values.input_7}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.input_7 && touched.input_7 && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.input_7}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className=" mt-10 lg:mt-20">
                  <h1 className="text-xl md:text-3xl font-amithen py-2 ">
                    Arrival Details
                  </h1>
                  <div className="space-y-5">
                    <div className=" space-y-5 md:space-y-0 md:flex md:space-x-5">
                      {/* Address */}
                      <div className="md:space-y-1">
                        <p className="text-xs md:text-base">Arrival date </p>
                        <input
                          type="date"
                          placeholder=""
                          name="input_8"
                          className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
                          value={values.input_8}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.input_8 && touched.input_8 && (
                          <p className="text-red-500 text-xs mt-2">
                            {errors.input_8}
                          </p>
                        )}
                      </div>

                      {/* Phone Number*/}
                      <div className="md:space-y-1">
                        <p className="text-xs md:text-base">Departure Date </p>
                        <input
                          type="date"
                          placeholder=""
                          name="input_9"
                          className="border-2 w-80 h-10 pl-3 border-dotted border-black rounded-md focus:outline-none"
                          value={values.input_9}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.input_9 && touched.input_9 && (
                          <p className="text-red-500 text-xs mt-2">
                            {errors.input_9}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-1 ">
                      {/* Message input field */}
                      <p className="text-xs md:text-base">Message</p>
                      <textarea
                        type=""
                        placeholder=""
                        name="input_10"
                        className="border-2 border-black px-4 py-4   focus:outline-none h-44 pl-3"
                        value={values.input_10}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.input_10 && touched.input_10 && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.input_10}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <AnimatedSection>
                    <div className="flex justify-center md:justify-end items-end mt-4 lg:mt-8">
                      <button
                        onClick={handleSubmit}
                        className="bg-secondary-orange text-xs md:text-base w-36 h-10 text-white px-6 py-2 rounded-md mt-4 "
                      >
                        Confirm
                      </button>
                    </div>
                  </AnimatedSection>
                </div>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(BookingForm);
