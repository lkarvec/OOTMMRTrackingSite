import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardComponent } from 'react-bootstrap';
import classes from './Card.module.scss';

/**
 * A visual container for other visual React components.
 * * See https://react-bootstrap.github.io/components/cards/ for examples and documentation
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} [title=''] - Title in the header of the Card
 * @property {Node} children - Contains any element being rendered within the Card's body
 * @property {String} [size] - Changes the size style to one of our presets 'small', 'medium', 'large', or 'auto' if nothing is passed through
 * @property {Boolean} [selected] - Shows the selected border around the Card
 * @returns {JSX} A Card React Component
 */

const Card = (props) => {
    const {
        title,
        children,
        size,
        selected,
    } = props;

    let cardClass = classes.card;
    cardClass += selected ? ` ${classes.selected}` : '';

    switch (size) {
        case 'small':
            cardClass += ` ${classes.small}`;
            break;
        case 'medium':
            cardClass += ` ${classes.medium}`;
            break;
        case 'large':
            cardClass += ` ${classes.large}`;
            break;
        default:
            cardClass += ` ${classes.auto}`;
            break;
    }

    return (
        <CardComponent className={cardClass}>
            {title && (
                <CardComponent.Header className={classes.cardHeader}>
                    {title}
                </CardComponent.Header>
            ) }
            <CardComponent.Body className={classes.cardBody}>
                {children}
            </CardComponent.Body>
        </CardComponent>
    );
};

Card.defaultProps = {
    title: '',
};

Card.propTypes = {
    children: PropTypes.any.isRequired,
    selected: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    title: PropTypes.string,
};

export default Card;
