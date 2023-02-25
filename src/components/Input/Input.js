import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'react-bootstrap';
import Validation from './Validation/Validation';
import classes from './Input.module.scss';

/**
 * Text Box for user input
 * See https://react-bootstrap.github.io/forms/overview/ for examples and documentation of Form Controls
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} [ariaLabel=''] - Replaces what is read to the screenreader
 * @property {String} controlId - The input's id and the label's 'for' attribute.
 * @property {Boolean} [disabled=false] - Disables the functionality and greys it out
 * @property {String} label - Label for the Input
 * @property {String} [size='medium'] - Default size styling in 'small', 'medium' and 'large'
 * @property {JSX} [children] - Any children to be rendered below the component
 * @property {String} [type='text'] - Type of input
 * @property {Boolean} [readOnly] - disables input
 * @property {String} [placeholder=''] - placeholder that displays when no input is in the box
 * @returns {JSX} Input Component
 */

const Input = forwardRef((props, ref) => {
    const {
        ariaLabel,
        error,
        label,
        required,
        name,
        disabled,
        onBlur,
        onChange,
        value,
        className,
        placeholder,
        readOnly,
        type,
        onFocus,
        onKeyDown,
        multiple,//
        children,
        size,
    } = props;

    const requiredLabel = <>{label} <span className={classes.required}>*</span></>;
    let inputClass = ` ${classes.inputContainer} ${className}`;
    inputClass += disabled ? ` ${classes.disabled}` : '';
    inputClass += error ? ` ${classes.inputContainer.error}` : '';
    let message = '';

    if (error) {
        if (error.type === 'required') {
            message = `required`;
        }
        message = error.message || message;
    }

    switch (size) {
        case 'small':
            inputClass += ` ${classes.small}`;
            break;
        case 'medium':
            inputClass += ` ${classes.medium}`;
            break;
        case 'large':
            inputClass += ` ${classes.large}`;
            break;
        default:
            inputClass += ` ${classes.inputContainer}`;
            break;
    }
    return (
        <Form.Group controlId={name} className={inputClass}>
            <Form.Label>{required ? requiredLabel : label}</Form.Label>
            <Validation touched={!!error} validationMessage={message} />
            <InputGroup>
                <Form.Control
                    ref={ref}
                    name={name}
                    className={error ? `${classes.error}` : inputClass}
                    aria-label={ariaLabel || label}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    readOnly={readOnly}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    onChange={onChange}
                    multiple={multiple}
                />
            </InputGroup>
            <Form.Text>
                {children}
            </Form.Text>
        </Form.Group>
    );
});

Input.displayName = 'Input';

Input.defaultProps = {
    className: '',
    error: null,
    disabled: false,
    readOnly: false,
    label: 'Label',
    ariaLabel: '',
    name: '',
    placeholder: '',
    type: 'text',
    value: undefined,
};

Input.propTypes = {
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.object,
    label: PropTypes.string,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.string,
    value: PropTypes.any
};

export default Input;

