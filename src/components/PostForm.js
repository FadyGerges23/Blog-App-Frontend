import { ErrorMessage, Field, Form, Formik } from "formik";
import PostFormSchema from "../validation_schemas/PostFormSchema";

const PostForm = ({ title, initialValues, isMutationInFlight, errors, handleSubmit }) => {
    return ( 
        <div className="form">
            <h2>{ title }</h2>
            <ul>
                {errors.map((error, index) => {
                    return (
                        <li key={index} className="error">{ error }</li>
                    );
                })}
            </ul>
            <Formik
                initialValues={initialValues}
                validationSchema={PostFormSchema}
                onSubmit={(values, { setSubmitting }) => {
                    handleSubmit(values)
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label htmlFor="title">Title</label>
                        <Field 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="title"
                        />
                        <ErrorMessage name="title" component="p" className="error"></ErrorMessage>

                        <label htmlFor="body">Body</label>
                        <Field 
                            type="text" 
                            id="body" 
                            name="body" 
                            placeholder="body"    
                        />
                        <ErrorMessage name="body" component="p" className="error"></ErrorMessage>

                        <button type="submit" disabled={isSubmitting && isMutationInFlight}>Submit</button>
                    </Form>
                )}

            </Formik>
        </div> 
     );
}
 
export default PostForm;