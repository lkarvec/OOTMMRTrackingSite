import React, { useState } from 'react';
import { Accordion as BSAccordion } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classes from './Accordion.module.scss';

//TODO: Make a sass class passthrough so you can size these correctly

/**
 * Interactable Bootstrap Accordion Component
 * * See https://react-bootstrap.github.io/components/accordion/ for examples and documentation
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {String} [title] - Title in the header of the Accordion
 * @property {Node} children - Contains any element being rendered within the Accordion's body
 * @property {String} [eventKey='0'] - ID that controls the click event for opening the Accordion.  Needs to be unique.
 * @property {String} [key] - String that identifies a key that will toggle the show state of the accordion.  
 * @property {String | Array <String>} [defaultActiveKey] - ID that controls opening and closing without a click event key.
 * @returns {JSX} - Accordion Component
 */

const Accordion = (props) => {
    const {
        defaultActiveKey,
        eventKey,
        title,
        children,
        key
    } = props;
    
    const [show, setShow] = useState('');

    function onKeyPressed(e) {
        if (e.key === 'ArrowDown' && show === '') {
            setShow(show === '' ? 'show' : '');
        }
        if (e.key === 'ArrowUp' && show === 'show') {
            setShow(show === '' ? 'show' : '');
        }
        if (e.key === key) {
            setShow(show === '' ? 'show' : '');
        }
    }


    return (
        <BSAccordion
            tabIndex="0"
            key={eventKey}
            id={defaultActiveKey}
            defaultActiveKey={defaultActiveKey}
            onKeyDown={onKeyPressed}
            aria-label={title + ' collapsable section'}
        >
            <BSAccordion.Item eventKey={eventKey} className={classes.collapse + ' ' + show}>
                <BSAccordion.Header>{title}</BSAccordion.Header>
                <BSAccordion.Body className={classes.cardBody}>
                    {children}
                </BSAccordion.Body>
            </BSAccordion.Item>
        </BSAccordion>
    );
};

Accordion.defaultProps = {
    eventKey: '0',
};

Accordion.propTypes = {
    children: PropTypes.any.isRequired,
    defaultActiveKey: PropTypes.string,
    eventKey: PropTypes.string,
    title: PropTypes.string,
};
export default Accordion;
