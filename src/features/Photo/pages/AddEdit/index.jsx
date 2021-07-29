import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss';
import PhotoForm from 'features/Photo/components/PhotoForm';
import Banner from 'components/Banner';
function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
            </div>
        </div>
    )
}

AddEditPage.propTypes = {

}

export default AddEditPage

