import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonComponent } from 'react-bootstrap';
import classes from './Button.module.scss';

/**
 * Interactable Button component
 * * See https://react-bootstrap.github.io/components/buttons/ for examples and documentation

 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} label - Label shown on the button
 * @property {String} [ariaLabel=label] - Replaces what is read to the screenreader
 * @property {String} [variant='primary'] - Changes the design style to one of our presets
 * cases 'primary'[Default], 'secondary', 'danger', 'warning', 'success', 'light', 'dark', 'info', 'link'
 * @property {String} [size] - Changes the size style to one of our presets 'small', 'medium', 'large', or 'auto' if nothing is passed through
 * @property {Function} handleClick - Function to call when the button is clicked
 * @property {String} [className=''] - Manually change the styling of the button by passing in a className.  Allows the use of custom CSS.
 * @returns {JSX} Button Component
 */

const Button = (props) => {
    const {
        label,
        size,
        ariaLabel,
        handleClick,
        variant,
        className,
    } = props;

    let buttonClass = `${classes.button}`;
    switch (size) {
        case 'small':
            buttonClass += ` ${classes.small}`;
            break;
        case 'medium':
            buttonClass += ` ${classes.medium}`;
            break;
        case 'large':
            buttonClass += ` ${classes.large}`;
            break;
        default:
            buttonClass += ` ${classes.auto}`;
            break;
    }
    // This is down here for overwrites
    buttonClass += className ? ` ${className}` : '';

    switch (variant) {
        case 'primary':
            buttonClass += ` ${classes.primary}`;
            break;
        case 'secondary':
            buttonClass += ` ${classes.secondary}`;
            break;
        case 'danger':
            buttonClass += ` ${classes.danger}`;
            break;
        case 'warning':
            buttonClass += ` ${classes.warning}`;
            break;
        case 'success':
            buttonClass += ` ${classes.success}`;
            break;
        case 'light':
            buttonClass += ` ${classes.light}`;
            break;
        case 'dark':
            buttonClass += ` ${classes.dark}`;
            break;
        case 'info':
            buttonClass += ` ${classes.info}`;
            break;
        case 'link':
            buttonClass += ` ${classes.link}`;
            break;
        default:
            buttonClass += ` ${classes.primary}`;
            break;
    }

    return (
        <ButtonComponent
            variant={variant}
            aria-label={ariaLabel || label}
            className={buttonClass}
            onClick={handleClick}
            size={size}
        >
            {label}
        </ButtonComponent>
    );
};

Button.defaultProps = {
    variant: 'primary',
    className: '',
};

Button.propTypes = {
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'light', 'dark', 'info', 'link']),
};

export default Button;
