import { ErrorMessage, Field, Form, Formik } from "formik";
import SignInSchema from "../validation_schemas/SignInSchema";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Cookies from 'js-cookie';

const SignInForm = () => {
    const navigate = useNavigate();
    const { user, signUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const initialValues = {
        email_or_username: "",
        password: ""
    }

    useEffect(() => {
        if(user) {
            navigate('/home');
        }
    }, [user, navigate]);
    
    return (
        <div className="form">
            <h2>Sign In</h2>
            <ul>
                {errors.map((error, index) => {
                    return (
                        <li key={index} className="error">{ error }</li>
                    );
                })}
            </ul>
            <Formik
                initialValues={initialValues}
                validationSchema={SignInSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const userData = { user: values };

                    axios.post('http://localhost:3000/users/sign_in', userData)
                    .then(response => {
                        if(response.status === 200) {
                            signUser(response.data.user)
                            Cookies.set('user', JSON.stringify(userData), { expires: 7 });
                            navigate('/home');
                        }
                        else {
                            console.log("Error occurred while trying to sign-in. Status code: ", response.status)
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error.response.data.errors);
                        setErrors(error.response.data.errors);
                    });
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="email_or_username">Email or Username</label>
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