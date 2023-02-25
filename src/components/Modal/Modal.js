import React from 'react';
import PropTypes from 'prop-types';
import { Modal as BSModal, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import classes from './Modal.module.scss';

/**
 * Modal Component that opens with a button
 * See https://react-bootstrap.github.io/components/modal/ for examples and documentation on Modals
 * @param {Object} props - Object with all of the properties used within the react component, listed below.
 * @property {JSX} children - Any Component rendered within the body of the Modal
 * @property {String} [saveButtonLabel] - Label for the continue button on the Modal, which has handleContinueAction on it
 * @property {String} [openButtonLabel] - Label for the button that Shows the Modal
 * @property {String} [title] - A String that displays in the Header of the Modal
 * @property {String} [backdrop=false] - Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
 * @property {Object} [openButtonStyle] - Style passthrough for the open button
 * @property {Object} [submitButtonStyle] - Style passthrough for the submit button
 * @property {Object} [closeButtonStyle] - Style passthrough for the close button
 * @property {Boolean} show - This variable shows the moedal if true. Manage this with setShow in the parent component.
 * @property {Function} setShow - Show controller declared with useState in the parent component.
 * @property {String} [size='md'] - Size style passthrough.  Options are "lg", "md", and "sm"
 * @property {Function} handlePrimaryAction - Passthrough function that happens when you hit the Primary button.
 * @returns {JSX} Modal Component
 */

const Modal = (
    {
        buttonLabel,
        openButtonLabel,
        handlePrimaryAction,
        title,
        children,
        backdrop,
        openButtonStyle,
        closeButtonStyle,
        submitButtonStyle,
        submitButtonLabel,
        show,
        setShow,
        size
    }) => {
    const toggleShow = () => {
        setShow(!show);
    };

    const handleButton = () => {
        handlePrimaryAction();
    };

    const optionalSubmitButton = () => {
        if (submitButtonStyle) {
            <Button
                className={submitButtonStyle}
                handleClick={toggleShow}
                label={submitButtonLabel}
            />;
        }
    };

    const iconStyle = { fontSize: 20, cursor: 'pointer' };

    return (
        <>
            <Button
                className={openButtonStyle || {}}
                size="large"
                handleClick={toggleShow}
                label={openButtonLabel}
                ariaLabel={openButtonLabel}
            />

            <BSModal
                className={classes.modal}
                size={size}
                show={show}
                backdrop={backdrop}
                onHide={() => setShow(false)}
            >

                <BSModal.Header className={classes.header}>
                    <Col className={classes.title}>{title}</Col>
                    <Row className={classes.close}><Col><Button ariaLabel="close button" className={classes.iconBtn}
                        label={<i className="bi bi-x" style={iconStyle} />} handleClick={toggleShow}>
                        <i className="bi bi-x" style={iconStyle} />
                    </Button></Col></Row>
                </BSModal.Header>

                <BSModal.Body className={classes.body} >
                    <Row>
                        <Col>{children}</Col>
                    </Row>
                </BSModal.Body>

                <BSModal.Footer className={classes.footer}>
                    {optionalSubmitButton}
                    <Button
                        className={closeButtonStyle}
                        handleClick={handleButton}
                        label={buttonLabel}
                    />
                </BSModal.Footer>

            </BSModal>
        </>
    );
};

// TODO: make defaults for this component
Modal.defaultProps = {
    size: 'md',
};

Modal.propTypes = {
    backdrop: PropTypes.oneOf(['static', true, false]),
    buttonLabel: PropTypes.string,
    children: PropTypes.any.isRequired,
    closeButtonStyle: PropTypes.any,
    handlePrimaryAction: PropTypes.func.isRequired,
    openButtonLabel: PropTypes.string,
    openButtonStyle: PropTypes.any,
    setShow: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    submitButtonLabel: PropTypes.string,
    submitButtonStyle: PropTypes.object,
    title: PropTypes.string,
};

export default Modal;
