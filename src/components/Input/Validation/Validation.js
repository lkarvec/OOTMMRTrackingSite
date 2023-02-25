import React from 'react';
import PropTypes from 'prop-types';
import classes from './Validation.module.scss';

/**
 * Validation message for react hook form
 * See https://react-bootstrap.github.io/forms/overview/ for examples and documentation of Form Controls
 * See https://react-hook-form.com/api/useformstate/errormessage for error message documentation of the hook.
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} [errorMessage=null] - String the shows up to the user in Red text.
 * @property {String} [touched=false] - boolean if the parent component has been touched and recognized by react hook form, this is true.
 * @returns {JSX} Validation component
 */

const Validation = (props) => {
    const {
        errorMessage,
        touched,
    } = props;

    if (touched && errorMessage) {
        return (
            <span>
                <span className={classes.error}> - {errorMessage}</span>
            </span>
        );
    }
    return null;
};

Validation.defaultProps = {
    errorMessage: null,
    touched: false,
};

Validation.propTypes = {
    touched: PropTypes.bool,
    errorMessage: PropTypes.string,
};

export default Validation;
