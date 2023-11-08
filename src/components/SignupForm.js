import { ErrorMessage, Field, Form, Formik } from "formik";
import SignupSchema from "../schemas/signup_validation";
// import axios from 'axios';

const SignupForm = () => {
    const initialValues = {
        email: "",
        username: "",
        password: "",
        password_confirmation: ""
    }
    
    return (
        <div className="form">
            <h2>Sign Up</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
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
                        <label htmlFor="email">Email</label>
                        <Field 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="email"
                        />
                        <ErrorMessage name="email" component="p" className="error"></ErrorMessage>

                        <label htmlFor="username">Username</label>
                        <Field 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="username"
                        />
                        <ErrorMessage name="username" component="p" className="error"></ErrorMessage>

                        <label htmlFor="password">Passwod</label>
                        <Field 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="password"    
                        />
                        <ErrorMessage name="password" component="p" className="error"></ErrorMessage>

                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <Field 
                            type="password" 
                            id="password_confirmation" 
                            name="password_confirmation" 
                            placeholder="confirm-password"  
                        />
                        <ErrorMessage name="password_confirmation" component="p" className="error"></ErrorMessage>
                    
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}

            </Formik>
        </div> 
     );
}
 
export default SignupForm;