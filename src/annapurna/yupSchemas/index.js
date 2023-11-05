import * as Yup from "yup";

export const subscribeFormSchema = Yup.object({
  input_1: Yup.string()
    .min(2, "It must be at least 2 character ")
    .max(25)
    .required("First name is required"),
  input_3: Yup.string().required("Last name is required"),
  input_4: Yup.string()
    .email("Enter a valid email ")
    .required("Enter a valid email"),
});

export const contactUsFormSchema = Yup.object({
  input_1: Yup.string()
    .min(2, "It must be at least 2 character ")
    .max(25)
    .required("First name is required"),
  input_3: Yup.string().required("Last name is required"),
  input_4: Yup.string()
    .email("Enter a valid email ")
    .required("Enter a valid email"),
  input_5: Yup.string().required("Country name is required"),
  input_6: Yup.string().required("Message is required"),
});

export const bookingFormSchema = Yup.object({
  input_1: Yup.string()
    .min(2, "It must be at least 2 character ")
    .max(25)
    .required("Full name is required"),
  input_3: Yup.number()
    .typeError("Input number only")
    .min(1, "It must be at least 1 character ")
    .required("Number of people is required"),
  input_4: Yup.string().required("Email is required"),
  input_5: Yup.string().required("Country is required"),
  input_6: Yup.string().required("Address is required"),
  input_7: Yup.number()
    .typeError("Input number only")
    .required("Phone number is required"),
  input_8: Yup.string().required("Arrival date is required"),
  input_9: Yup.string().required("Departure date is required"),
  input_10: Yup.string().required("Message is required"),
  input_11: Yup.string(),
});

// Trip Review comment form schema
export const tripReviewCommentSchema = Yup.object({
  authorName: Yup.string()
    .min(2, "It must be at least 2 character ")
    .max(25)
    .required("First name is required"),
  // input_6: Yup.string().required("Last name is required"),
  authorEmail: Yup.string()
    .email("Enter a valid email ")
    .required("Enter a valid email"),
  content: Yup.string().required("Message is required"),
});

// authorName, authorEmail, content;
