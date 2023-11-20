import { ErrorMessage, Field, Form, Formik } from "formik";
import SignupSchema from "../validation_schemas/SignUpSchema";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Cookies from 'js-cookie';
// import { graphql } from 'relay-runtime';
import { useMutation } from 'react-relay';
import SignupFormMutation from "../graphql/mutations/SignupFormMutation";


const SignupForm = () => {
    const navigate = useNavigate();
    const [commitMutation, isMutationInFlight] = useMutation(SignupFormMutation);
    const { user, signUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const initialValues = {
        email: "",
        username: "",
        displayName: "",
        password: "",
        passwordConfirmation: ""
    }

    useEffect(() => {
        if(user) {
            navigate(`/users/${user.id}/home`);
        }
    }, [user, navigate]);
    
    return (
        <div className="form">
            <h2>Sign Up</h2>
            <ul>
                {errors.map((error, index) => {
                    return (
                        <li key={index} className="error">{ error }</li>
                    );
                })}
            </ul>
            <Formik
                initialValues={initialValues}
                validationSchema={SignupSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const userData = { user: values };

                    // axios.post('http://localhost:3000/users', userData)
                    // .then(response => {
                    //     if(response.status === 201) {
                    //         signUser(response.data.user)
                    //         Cookies.set('user', JSON.stringify(userData), { expires: 7 });
                    //         navigate('/home');
                    //     } 
                    //     else {
                    //         console.error('Resource creation failed. Status code:', response.status);
                    //     }
                    // })
                    // .catch(error => {
                    //     console.error('Error: ', error.response.data.errors);
                    //     setErrors(error.response.data.errors);
                    // });
               
                    commitMutation({
                        variables: {
                            input: userData
                        },
                        onCompleted: (response) => {
                            if(response.signUpUser.errors.length > 0) {
                                setErrors(response.signUpUser.errors)
                            } else {
                                signUser(response.signUpUser.user)
                                Cookies.set('user', JSON.stringify(response.signUpUser.user), { expires: 7 });
                                navigate(`/users/${response.signUpUser.user.id}/home`);
                            }
                        },
                        onError: (error) => {
                            console.log("Error:", error)
                            setErrors(["Can't perform the sign-up operation"])
                        }
                    })

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
                            placeholder="username (alphanumeric)"
                        />
                        <ErrorMessage name="username" component="p" className="error"></ErrorMessage>

                        <label htmlFor="displayName">Display Name</label>
                        <Field 
                            type="text" 
                            id="displayName" 
                            name="displayName" 
                            placeholder="display name"
                        />
                        <ErrorMessage name="displayName" component="p" className="error"></ErrorMessage>

                        <label htmlFor="password">Passwod</label>
                        <Field 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="password (at least 6 characters)"    
                        />
                        <ErrorMessage name="password" component="p" className="error"></ErrorMessage>

                        <label htmlFor="passwordConfirmation">Confirm Password</label>
                        <Field 
                            type="password" 
                            id="passwordConfirmation" 
                            name="passwordConfirmation" 
                            placeholder="confirm-password"  
                        />
                        <ErrorMessage name="passwordConfirmation" component="p" className="error"></ErrorMessage>
                    
                        <button type="submit" disabled={isSubmitting && isMutationInFlight}>Submit</button>
                        
                    </Form>
                )}

            </Formik>
        </div> 
     );
}
 
export default SignupForm;