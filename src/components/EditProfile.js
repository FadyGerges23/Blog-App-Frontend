import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import EditProfileSchema from "../validation_schemas/EditProfileSchema";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useMutation } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
// import axios from 'axios';

const EditProfileMutation = graphql`
  mutation EditProfileMutation(
    $input: EditUserInput!
  ) {
    editUser(
        input: $input
    ) {
      user {
        id
        email
        username
        displayName
      }
      errors
    }
  }
`;

const EditProfile = () => {
    const navigate = useNavigate();
    const { user, signUser } = useContext(UserContext);
    const [errors, setErrors] = useState([]);
    const initialValues = { 
        email: user ? user.email : "",
        username: user ? user.username : "",
        displayName: user ? user.displayName : "",
        password: "",
        passwordConfirmation: "",
        currentPassword: ""
    };
    const [commitMutation, isMutationInFlight] = useMutation(EditProfileMutation);
    
    return ( 
        <div className="form">
            <h2>Edit Profile</h2>
            <ul>
                {errors.map((error, index) => {
                    return (
                        <li key={index} className="error">{ error }</li>
                    );
                })}
            </ul>
            <Formik
                initialValues={initialValues}
                validationSchema={EditProfileSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const token = user.token;
                    const userData = { user: values }
                    // axios.put('http://localhost:3000/users', userData, {
                    //     headers: {
                    //         'Content-Type': 'application/json',
                    //         Authorization: `Bearer ${token}`,
                    //       },
                    // })
                    // .then(response => {
                    //     console.log(response.data.user)
                    //     if(response.status === 200) {
                    //         signUser(response.data.user)
                    //         Cookies.set('user', JSON.stringify(response.data.user), { expires: 7 });
                    //         navigate('/view_profile');
                    //     }
                    //     else {
                    //         console.log("Error occurred while trying to sign-in. Status code: ", response.status)
                    //     }
                    // })
                    // .catch(error => {
                    //     console.error('Error:', error.response.data.errors);
                    //     setErrors(error.response.data.errors);
                    // });

                    commitMutation({
                        variables: {
                            input: userData
                        },
                        onCompleted: (response) => {
                            if(response.editUser.errors.length > 0) {
                                setErrors(response.editUser.errors)
                            } else {
                                signUser({...response.editUser.user, token: token})
                                Cookies.set('user', JSON.stringify({...response.editUser.user, token: token}), { expires: 7 });
                                navigate('/view_profile');
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
                            placeholder="confirm password"  
                        />
                        <ErrorMessage name="passwordConfirmation" component="p" className="error"></ErrorMessage>

                        <label htmlFor="currentPassword">Current Password</label>
                        <Field 
                            type="password" 
                            id="currentPassword" 
                            name="currentPassword" 
                            placeholder="current password"  
                        />
                        <ErrorMessage name="currentPassword" component="p" className="error"></ErrorMessage>
                    
                        <button type="submit" disabled={isSubmitting && isMutationInFlight}>Submit</button>
                        
                    </Form>
                )}

            </Formik>
        </div> 


     );
}
 
export default EditProfile;