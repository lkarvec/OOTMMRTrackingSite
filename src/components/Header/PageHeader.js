import React from 'react';
import classes from './PageHeader.module.scss';
import { Col, Row, Image } from 'react-bootstrap';

/**

 * Page header
 * @returns {JSX} Page Header Component
 */

const PageHeader = () => {

    return (
        <Row className={classes.headerContainer}>
            <Col className={classes.content}>
                
            </Col>
            
        </Row>
    );
};

export default PageHeader;
