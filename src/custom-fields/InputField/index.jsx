import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label } from 'reactstrap';

function InputField(props) {
    const { field,
        label, type, placeholder, disabled
    } = props

    // const { onChange, onBlur, value, name } = field => has 4 line
    const { name } = field

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}
                type={type}
                disabled={disabled}
                placeholder={placeholder} />
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

