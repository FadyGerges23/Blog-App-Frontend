import * as yup from "yup";

const PostFormSchema = yup.object().shape({
    title: yup.string().required("Required"),
    body: yup.string().required("Required!")
});

export default PostFormSchema;