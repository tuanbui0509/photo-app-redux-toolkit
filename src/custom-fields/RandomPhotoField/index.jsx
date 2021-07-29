import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
        // value = newImageUrl
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
        </FormGroup>
    )
}

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
}

RandomPhotoField.defaultProps = {
    label: '',
}

export default RandomPhotoField

