import * as yup from "yup";

const SigInSchema = yup.object().shape({
    email_or_username: yup.string().required("Required"),
    password: yup.string().required("Required!")
});

export default SigInSchema;