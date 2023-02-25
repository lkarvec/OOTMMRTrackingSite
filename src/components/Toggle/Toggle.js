import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import classes from './Toggle.module.scss';

/**
 * Toggle with Aria and onChange functionality
 * * See https://react-bootstrap.github.io/forms/checks-radios/ for examples and documentation on Form Checks
 * * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * * @property {String} [ariaLabel=''] - Replaces what is read to the screenreader
 * * @property {Boolean} selected - Manually controls the checkbox
 * * @property {String} controlId - A Unique ID
 * * @property {Boolean} [disabled=false] - Disables the functionality of the Checkbox and greys it out
 * * @property {Function} handleChange - On Change Passthrough
 * * @property {String} label - Label for the checkbox
 * * @property {Boolean} [small=false] - If on, small checkbox
 * * @property {String} [type='checkbox'] - Switches the type of the Toggle
 * * @returns {JSX} Checkbox Component
 */

const Toggle = (props) => {
    const {
        controlId,
        label,
        small,
        disabled,
        ariaLabel,
        selected,
        handleChange,
        type,
    } = props;

    let inputClass = small ? ` ${classes.small}` : ` ${classes.large}`;
    inputClass += disabled ? ` ${classes.disabled}` : '';
    inputClass += ` ${classes.toggleContainer}`;

    return (
        <Form.Group controlId={controlId} className={inputClass}>
            <Form.Check
                label={label}
                aria-label={ariaLabel}
                type={type}
                checked={selected}
                disabled={disabled}
                onChange={handleChange}
            />
        </Form.Group>
    );
};

Toggle.defaultProps = {
    disabled: false,
    small: false,
    ariaLabel: '',
    type: 'checkbox',
};

Toggle.propTypes = {
    ariaLabel: PropTypes.string,
    controlId: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    small: PropTypes.bool,
    type: PropTypes.string,
};

export default Toggle;
