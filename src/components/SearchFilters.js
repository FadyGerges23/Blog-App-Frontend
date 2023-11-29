import Select from 'react-select'
import { Field, Form, Formik } from "formik";
import { usePreloadedQuery } from "react-relay";
import GetCategoriesQuery from "../graphql/queries/GetCategoriesQuery";
import { useContext, useEffect, useState } from "react";
import GetTagsQuery from '../graphql/queries/GetTagsQuery';
import { UserContext } from '../contexts/UserContext';

const SearchFilters = ({ categoriesQueryRef , tagsQueryRef, reload, pageNumber, postsType, setSearchFilters }) => {
    const { user } = useContext(UserContext);
    
    const { categories } = usePreloadedQuery(
        GetCategoriesQuery,
        categoriesQueryRef,
      );

    const { tags } = usePreloadedQuery(
        GetTagsQuery,
        tagsQueryRef,
    );

    const [categoriesOptions, setCategoriesOptions] = useState([]);
    const [tagsOptions, setTagsOptions] = useState([]);
    const [selectedTagsOptions, setSelectedTagsOptions] = useState([]);

    const initialValues = {
        title: "",
        description: "",
        category: null,
        tags: null
    }

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

    return ( 
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                const { category, tags, ...params} = values;
                const tagsIds = selectedTagsOptions.map(selectedTag => selectedTag.value);
                const searchParams = {...params, tagsIds, pageNumber: pageNumber.toString()} 
                
                if(postsType === "All Posts"){
                    reload(searchParams);
                    setSearchFilters(searchParams)
                }
                else {
                    reload({...searchParams, userId: user.id});
                    setSearchFilters({...searchParams, userId: user.id})
                }
                
                setSubmitting(false)
            }}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className="filters">
                    <h3 className="filter-label">Filters</h3>

                    <Field 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="title"
                        className="filter-fields"
                    />

                    <Field 
                        type="text" 
                        id="description" 
                        name="description" 
                        placeholder="description"
                        className="filter-fields"
                    />

                    <Field 
                            as={Select} 
                            id="category" 
                            name="category"
                            placeholder="category"
                            className="select"
                            options={categoriesOptions}
                            onChange={option => {
                                if(option) {
                                    setFieldValue('category', option); 
                                    setFieldValue('categoryId', option.value)
                                } else {
                                    setFieldValue('category', null);
                                    setFieldValue('categoryId', null); 
                                }
                            }} 
                            isClearable={true}
                    />

                    <Field 
                        as={Select} 
                        id="tags" 
                        name="tags"
                        placeholder="tags"
                        className="select"
                        options={tagsOptions}
                        isMulti
                        value={selectedTagsOptions}
                        onChange={handleSelectTagChange}
                    />

                    <button type="submit" disabled={isSubmitting}>Search</button>
                </Form>
            )}
        </Formik>
     );
}
 
export default SearchFilters;