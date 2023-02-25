import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

/*  
*/

const InitialLoad = (props) => {
    const {
        data
    } = props;

    return (
        <>
                <Row>
                    {data
                        ? <>
                            <Col>
                                <p>If Statement that I need to load all of the data in for.</p>
                            </Col>
                        </>

                        : <>
                            <Col>
                                <p>Else Statement that shows the initial view.</p>
                            </Col>
                        </>
                            
                    }
                </Row>
        </>
    );
};

InitialLoad.propTypes = {
    data: PropTypes.object,
};

export default InitialLoad;
