import * as yup from "yup";

const SigInSchema = yup.object().shape({
    emailOrUsername: yup.string().required("Required"),
    password: yup.string().required("Required!")
});

export default SigInSchema;