import React, { useState } from "react";
import {
  getCountriesNameData,
  sendContactUsFormData,
  sendTripReviewCommentData,
} from "../../../../pages/api/wordpress_API";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { tripReviewCommentSchema } from "../../yupSchemas";
import AnimatedSection from "../../Animations/AnimatedSection";

const AddTripReviewCommentForm = ({ tripId, tripTitle }) => {
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
  //   input_1: "",
  //   input_3: "",
  //   input_4: "",
  //   input_5: "",
  //   input_6: "",
  // });
  // console.log(formData);
  const [loading, setLoading] = useState(false);
  const [showConfirmedMessage, setShowConfirmedMessage] = useState(false);

  // Formik
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        postId: tripId,
        authorName: "",
        authorEmail: "",
        content: "",
      },
      validationSchema: tripReviewCommentSchema,
      onSubmit: async (values, action) => {
        // console.log("values", values);
        setLoading(true);
        try {
          // Send data to ninja form
          async function postComment(values) {
            const response = await fetch(
              "https://cms.annapurnatreks.com/wp-json/wp/v2/comments",
              {
                method: "POST",
                headers: {
                  Authorization: `Basic ${Buffer.from(
                    `developer:${process.env.NEXT_PUBLIC_REST_API_DEVELOPER_KEY}`
                  ).toString("base64")}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  post: values?.postId,
                  author_name: values?.authorName,
                  author_email: values?.authorEmail,
                  content: values?.content,
                }),
              }
            );
            const data = await response.json();
            return data;
          }

          postComment(values)
            .then((data) => {
              // console.log("Comment posted successfully:", data);
              // console.log("data", data);
              if (data?.status === "hold") {
                setShowConfirmedMessage(true);
                setLoading(false);
                toast.success("Your Review is submitted successfully");
                action.resetForm();
              }
              if (data?.data?.status === 409) {
                setShowConfirmedMessage(true);
                setLoading(false);
                toast.success(
                  "You have already submitted a review for this trip."
                );
                action.resetForm();
              }
              if (data?.data?.status === 400) {
                toast.error("Something went wrong. Please try again later.");
              }
            })
            .catch((error) => {
              // console.error("Failed to post comment:", error);
            });
        } catch (error) {
          // console.log("Error", error);
        }
      },
    });

  // postId, authorName, authorEmail, content
  return (
    <>
      {loading ? (
        <h1 className="text-5xl font-amithen text-secondary-orange text-center ">
          Sending...
        </h1>
      ) : (
        <>
          {showConfirmedMessage ? (
            <h1 className=" mt-5 font-amithen text-5xl text-black">
              Thank you for your review.
            </h1>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="w-full  ">
                <div className="space-y-5 w-full">
                  <div className="w-[100%] lg:w-[40vw] space-y-5 md:space-y-0 md:flex md:space-x-5">
                    {/* First */}
                    <div className="md:space-y-1 w-full">
                      <p className="text-xs md:text-base">Full Name</p>
                      <input
                        type="text"
                        placeholder=""
                        name="authorName"
                        className="border-2 w-full  h-10 pl-3 text-black border-dotted border-black rounded-md focus:outline-none"
                        value={values.authorName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.authorName && touched.authorName && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.authorName}
                        </p>
                      )}
                    </div>

                    {/* Last Name */}
                    {/* <div className="md:space-y-1">
                      <p className="text-xs md:text-base">Last Name</p>
                      <input
                        type="text"
                        placeholder=""
                        name="input_6"
                        className="border-2 w-80 h-10 pl-3 text-black border-dotted border-black rounded-md focus:outline-none"
                        value={values.input_6}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      /> */}
                    {/* {errors.input_6 && touched.input_6 && ( */}
                    {/* <p className="text-red-500 text-xs mt-2"> */}
                    {/* {errors.input_6} */}
                    {/* </p> */}
                    {/* )} */}
                    {/* </div> */}
                  </div>
                  <div className="  space-y-5 md:space-y-0  md:flex md:space-x-5 w-full">
                    <div className="space-y-1 w-full">
                      <p className="text-xs md:text-base">Email </p>
                      <input
                        type="text"
                        placeholder=""
                        name="authorEmail"
                        className="border-2  w-full h-10 pl-3 text-black border-dotted border-black rounded-md focus:outline-none"
                        value={values.authorEmail}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      {errors.authorEmail && touched.authorEmail && (
                        <p className="text-red-500 text-xs mt-2">
                          {errors.authorEmail}
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
                      name="content"
                      className="border-2 border-black text-black  h-44 pl-3 py-3 outline-none rounded-md"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.content && touched.content && (
                      <p className="text-red-500 text-xs mt-2">
                        {errors.content}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <AnimatedSection>
                    <div className="flex justify-center md:justify-end items-end">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-secondary-orange text-xs md:text-base w-36 h-10 text-white px-6 py-2 rounded-md mt-4 "
                      >
                        Submit
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

export default React.memo(AddTripReviewCommentForm);
