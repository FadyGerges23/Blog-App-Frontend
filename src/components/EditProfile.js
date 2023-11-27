import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import EditProfileSchema from "../validation_schemas/EditProfileSchema";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import baseUrl from "../constants/baseUrl";
import Cookies from 'js-cookie';
// import { useMutation } from 'react-relay';
// import EditProfileMutation from "../graphql/mutations/EditProfileMutation";


const EditProfile = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [errors, setErrors] = useState([]);
    const { user } = useContext(UserContext)
    const [file, setFile] = useState(null);
    const {email, username, displayName, avatar, error} = user;
    const initialValues = { 
        email: email,
        username: username,
        displayName: displayName,
        password: "",
        passwordConfirmation: "",
        currentPassword: ""
    };
    // const [commitMutation, isMutationInFlight] = useMutation(EditProfileMutation);
    
    useEffect(() => {
        if(id !== user.id) {
            navigate("/unauthorized")
        }
        if(error) {
            navigate('/users/sign_in');
        }
    }, [id, user, error, navigate]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    return ( 
        <div className="form edit-form">
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
                    const formData = new FormData();
                    formData.append('user[email]', values.email);
                    formData.append('user[username]', values.username);
                    formData.append('user[display_name]', values.displayName);
                    formData.append('user[password]', values.password);
                    formData.append('user[password_confirmation]', values.passwordConfirmation);
                    formData.append('user[current_password]', values.currentPassword);
                    
                    if(file) {
                        formData.append('user[avatar]', file);
                    }

                    const userCookie = Cookies.get('user');
                    
                    axios.put(`http://localhost:3000/users/${user.id}/edit`, formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${JSON.parse(userCookie).token}`,
                          },
                    })
                    .then(response => {
                        if(response.status === 200) {
                            navigate(`/users/${response.data.user.id}/profile`);
                        }
                        else {
                            console.log("Error occurred while trying to sign-in. Status code: ", response.status)
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error.response.data.errors);
                        setErrors(error.response.data.errors);
                    });

                    // const userData = { user: {...values, id: id} }

                    // commitMutation({
                    //     variables: {
                    //         input: userData
                    //     },
                    //     onCompleted: (response) => {
                    //         if(response.editUser.errors.length > 0) {
                    //             setErrors(response.editUser.errors)
                    //         } else {
                    //             navigate(`/users/${user.id}/profile`);
                    //         }
                    //     },
                    //     onError: (error) => {
                    //         console.log("Error:", error)
                    //         setErrors(["Can't perform the sign-up operation"])
                    //     }
                    // })

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

                        <label htmlFor="avatar">Avatar</label>
                        <img src={avatar ? (baseUrl + avatar) : "/assets/default-avatar.png"} alt="avatar" className="avatar" />
                        <input 
                            type="file" 
                            id="avatar" 
                            name="avatar"
                            onChange={handleFileChange}
                            accept="image/*"
                        />

                        <button type="submit" disabled={isSubmitting}>Submit</button>
                        
                    </Form>
                )}

            </Formik>
        </div> 


     );
}
 
export default EditProfile;