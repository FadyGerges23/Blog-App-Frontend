import * as yup from "yup";

const alphanumeric = /^[a-zA-Z0-9]+$/

const SigUpSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email!").required("Required"),
    username: yup.string().matches(alphanumeric, { message: "Username can contain numbers and letters only (alphanumeric)" }).required("Required!"),
    password: yup.string().min(6).required("Required!"),
    password_confirmation: yup.string().oneOf([yup.ref('password'), null], "Passwords must match!").required("Required!")
});

export default SigUpSchema;