import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
    const { field,form,
        label, type, placeholder, disabled
    } = props

    // const { onChange, onBlur, value, name } = field => has 4 line
    const { name } = field
    const { touched,errors } = form
    const showError = errors[name] && touched[name]
    console.log(showError);
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder} 
                invalid={showError}
                />
                {showError && <FormFeedback>{errors[name]}</FormFeedback>}
        </FormGroup>
    )
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

export default InputField

