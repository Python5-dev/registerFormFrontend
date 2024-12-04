import * as Yup from "yup";

const registerSchema = Yup.object({
    username: Yup.string().min(3, "Username must be at least 3 characters").max(15, "Username must be 15 characters or less").required("Username is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
    confirmPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password")], "Password and Confirm Password must be match")

})

const loginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).required("Please enter your password")
})

export { registerSchema, loginSchema };