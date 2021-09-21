import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import * as Yup from 'yup';
function PhotoForm(props) {
    const { initialValues, isAddMode } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),

        categoryId: Yup.number().required('This field is required').nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required'),
            otherwise: Yup.string().notRequired()
        })
    })
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}

        >
            {formikProps => {
                // do something here ...
                const { values, errors, touched, isSubmitting } = formikProps
                {/* console.log({ values, errors, touched }) */ }
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
                            <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                                {isSubmitting && <Spinner size="sm" />}
                                {isAddMode ? 'Add to album' : 'Update your photo'}
                            </Button>
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

