import * as Yup from "yup";

const registerSchema = Yup.object({
    username: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(8).required("Please enter your password"),
    confirmPassword: Yup.string().required("Please enter your confirm password").oneOf([Yup.ref("password")], "password must match")

})

export default registerSchema;