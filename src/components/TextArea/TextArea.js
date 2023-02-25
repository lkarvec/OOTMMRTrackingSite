import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import classes from './TextArea.module.scss';

/**
 * Text Area component
 * * See https://react-bootstrap.github.io/forms/form-control/ for Bootstrap Form Control
 * @param {Object} props - Object with all of the properties used within the tooltip, listed below.
 * @property {String} [ariaLabel] - Replaces what is read to the screenreader
 * @property {String} controlId - A Unique ID
 * @property {String} [label=''] - Label for the Text Area
 * @property {Function} [onBlur=()=>{}] - When the Text Area is clicked off, this function will occur
 * @property {Function} [onChange=()=>{}] - When the Text Area changes, this function will occur
 * @property {String} [placeholder=''] - Placeholder text when the Text Area is blank
 * @property {Boolean} [rows=3] - Number of Rows the text area will display on screen by default
 * @property {String} [type='text'] - Type of input into the Text Area
 * @property {String} [value=''] - Control for Text Area data
 * @returns {JSX} Text Area Component
 */

const TextArea = (props) => {
    return (
        <Form.Group controlId={props.controlId} className={`${classes.formGroup} ${classes.textArea}`}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                aria-label={props.ariaLabel}
                as="textarea"
                className={classes.control}
                data-test={props.controlId}
                placeholder={props.placeholder}
                onBlur={props.onBlur}
                onChange={props.onChange}
                rows={props.rows}
                type={props.type}
                value={props.value}
            />
        </Form.Group>
    );
};

TextArea.propTypes = {
    ariaLabel: PropTypes.string,
    controlId: PropTypes.string.isRequired,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.number,
    type: PropTypes.string,
    value: PropTypes.string,
};

TextArea.defaultProps = {
    label: '',
    onBlur: () => { /* This is intentional */ },
    onChange: () => { /* This is intentional */ },
    placeholder: '',
    rows: 3,
    type: 'text',
    value: '',
};

export default TextArea;
