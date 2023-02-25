import React from 'react';
import PropTypes from 'prop-types';
import classes from './Header.module.scss';

/**
 * Adjustable header component
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @returns {JSX} Header Component
 */

const Header = (props) => {
    const {
        children,
    } = props;

    let headerClass = `${classes.headerContainer}`;

    return (
        <header className={headerClass}>{children}</header>
    );
};

Header.defaultProps = {
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Header;
