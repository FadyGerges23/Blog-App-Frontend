import { ErrorMessage, Field, Form, Formik } from "formik";
import PostFormSchema from "../validation_schemas/PostFormSchema";
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { useMutation, usePreloadedQuery } from "react-relay";
import GetCategoriesQuery from "../graphql/queries/GetCategoriesQuery";
import { useEffect, useState } from "react";
import GetTagsQuery from "../graphql/queries/GetTagsQuery";
import CreateTagMutation from "../graphql/mutations/CreateTagMutation";


const PostForm = ({ title, initialValues, isMutationInFlightCategories, errors, handleSubmit, categoriesQueryRef, tagsQueryRef }) => {
    const { categories } = usePreloadedQuery(
        GetCategoriesQuery,
        categoriesQueryRef,
      );

      const { tags } = usePreloadedQuery(
        GetTagsQuery,
        tagsQueryRef,
      );

      const [commitMutation, isMutationInFlight] = useMutation(CreateTagMutation);

      const [categoriesOptions, setCategoriesOptions] = useState([]);
      const [tagsOptions, setTagsOptions] = useState([]);

      const [selectedTagsOptions, setSelectedTagsOptions] = useState(initialValues.tags ? initialValues.tags : []);
      const [tagErrors, setTagErrors] = useState([]);


    useEffect(() => {
        setCategoriesOptions(
            categories.map(category => {
                return {
                    label: category.name,
                    value: category.id
                }
            })
        );

        setTagsOptions(
            tags.map(tag => {
                return {
                    label: tag.name,
                    value: tag.tagId
                }
            })
        );
    }, [categories, tags]);

    const handleSelectTagChange = (selectedValues) => {
        setSelectedTagsOptions(selectedValues);
      };
    
    const handleCreateTagOption = (tagName) => {
        const tagData = { tag: { name: tagName } };

        commitMutation({
            variables: {
                input: tagData
            },
            onCompleted: (response) => {
                if(response.createTag.errors.length > 0) {
                    setTagErrors(response.createTag.errors)
                } else {
                    const createdTag = {
                        label: response.createTag.tag.name,
                        value: response.createTag.tag.tagId
                    }
                    setSelectedTagsOptions((prevOptions) => [...prevOptions, createdTag]);
                    setTagsOptions((prevOptions) => [...prevOptions, createdTag]);
                }
            },
            onError: (error) => {
                console.log("Error:", error)
                setTagErrors(["Can't create post!"])
            }
        })
    };

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
            <ul>
                {tagErrors.map((error, index) => {
                    return (
                        <li key={index} className="error">{ error }</li>
                    );
                })}
            </ul>
            <Formik
                initialValues={initialValues}
                validationSchema={PostFormSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const { category, tags, ...params} = values;
                    const tagsIds = selectedTagsOptions.map(selectedTag => selectedTag.value);
                    handleSubmit({...params, tagsIds})
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
                            options={categoriesOptions}
                            onChange={option => {setFieldValue('category', option); setFieldValue('categoryId', option.value)}} 
                        />
                        <ErrorMessage name="category" component="p" className="error"></ErrorMessage>

                        <label htmlFor="tag">Tag</label>
                        <Field 
                            as={CreatableSelect} 
                            id="tags" 
                            name="tags"
                            placeholder="select"
                            className="select"
                            options={tagsOptions}
                            isMulti
                            value={selectedTagsOptions}
                            onChange={handleSelectTagChange}
                            onCreateOption={handleCreateTagOption}
                        />
                        <ErrorMessage name="tags" component="p" className="error"></ErrorMessage>

                        <button type="submit" disabled={isSubmitting && isMutationInFlightCategories && isMutationInFlight}>Submit</button>
                    </Form>
                )}

            </Formik>
        </div> 
     );
}
 
export default PostForm;