import * as Yup from "yup";

export const registrationSchema = Yup.object({
    username: Yup.string().min(3).max(25).required("Enter your name"),
    email: Yup.string().email().required("Enter your email"),
    password: Yup.string().min(6).required("Enter your password"),
    password: Yup.string().min(6).required("Enter your password"),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], "Password should match").required("Enter your password"),
});