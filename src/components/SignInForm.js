import { ErrorMessage, Field, Form, Formik } from "formik";
import SignInSchema from "../schemas/signIn_validation";
// import axios from 'axios';

const SignInForm = () => {
    const initialValues = {
        email_or_username: "",
        password: ""
    }
    
    return (
        <div className="form">
            <h2>Sign In</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={(values, { setSubmitting }) => {
                    // console.log(values);
                    // axios.post('http://localhost:3000/users', { user: values })
                    // .then(response => {
                    //     console.log("Response")
                    //     console.log(response);
                    // })
                    // .catch(error => {
                    //     console.error('Error:', error);
                    // });
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="email_or_username">Email</label>
                        <Field 
                            type="text" 
                            id="email_or_username" 
                            name="email_or_username" 
                            placeholder="email or username"
                        />
                        <ErrorMessage name="email_or_username" component="p" className="error"></ErrorMessage>

                        <label htmlFor="password">Passwod</label>
                        <Field 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="password"    
                        />
                        <ErrorMessage name="password" component="p" className="error"></ErrorMessage>

                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}

            </Formik>
        </div> 
     );
}
 
export default SignInForm;