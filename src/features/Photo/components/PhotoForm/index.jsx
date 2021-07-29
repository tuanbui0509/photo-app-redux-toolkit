import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup } from 'reactstrap';
import * as Yup from 'yup';
function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
        photo: ''
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),

        categoryId: Yup.number().required('This field is required').nullable(),

        photo: Yup.string().when('categoryId',{
            is: 1, 
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired()
        })
    })
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => console.log('Submit: ', values)}
            
            >
            {formikProps => {
                // do something here ...
                const { values, errors, touched } = formikProps
                console.log({ values, errors, touched })
                return (
                    <Form>
                        <FastField
                            //Props FastField
                            name='title'
                            component={InputField}
                            // Props my Input field
                            label='Title'
                            placeholder='Eg: Wow nature ...'
                        />

                        <FastField
                            //Props FastField
                            name='categoryId'
                            component={SelectField}
                            // Props my Input field
                            label='category'
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        <FormGroup>
                            <Button type="submit" color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

PhotoForm.propTypes = {

}

export default PhotoForm

