import { ErrorMessage, Field, Form, Formik } from "formik";
import PostFormSchema from "../validation_schemas/PostFormSchema";
import Select from 'react-select'
import { usePreloadedQuery } from "react-relay";
import GetCategoriesQuery from "../graphql/queries/GetCategoriesQuery";
import { useEffect, useState } from "react";


const PostForm = ({ title, initialValues, isMutationInFlight, errors, handleSubmit, queryRef }) => {
    const { categories } = usePreloadedQuery(
        GetCategoriesQuery,
        queryRef,
      );
      const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(
            categories.map(category => {
                return {
                    label: category.name,
                    value: category.id
                }
            })
        );
    }, [categories]);

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
                    const { category, ...params} = values;
                    handleSubmit(params)
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting, setFieldValue }) => (
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

                        <label htmlFor="category">Category</label>
                        <Field 
                            as={Select} 
                            id="category" 
                            name="category"
                            placeholder="select"
                            className="select"
                            options={options}
                            onChange={option => {setFieldValue('category', option); setFieldValue('categoryId', option.value)}} 
                        />
                        <ErrorMessage name="category" component="p" className="error"></ErrorMessage>

                        <button type="submit" disabled={isSubmitting && isMutationInFlight}>Submit</button>
                    </Form>
                )}

            </Formik>
        </div> 
     );
}
 
export default PostForm;