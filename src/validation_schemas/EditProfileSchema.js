import * as yup from "yup";

const alphanumeric = /^[a-zA-Z0-9]+$/

const EditProfileSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email!").required("Required"),    
    username: yup.string().matches(alphanumeric, { message: "Username can contain numbers and letters only (alphanumeric)" }).required("Required!"),
    password: yup.string().min(6, "Password must be at least 6 characters long"),    
    passwordConfirmation: yup.string().notRequired()
    .when('password', {
        is: (password) => password && password.length > 0,
        then: () => yup.string().oneOf([yup.ref('password'), null], "Passwords must match!").required('Required!'),
        otherwise: () => yup.string().max(0, "Password field must be filled first!")
    }),
    currentPassword: yup.string().required("Required!")
});

export default EditProfileSchema;