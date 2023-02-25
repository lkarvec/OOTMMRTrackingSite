import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const Tabs = (props) => {
    const { link, tabList, activeTab, handleSelect } = props;

    const items = [];

    for (const tab of tabList) {
        if (tab === activeTab) {
            items.push(
                <Nav.Item>
                    <Nav.Link eventKey={tab}>
                        <span style={{ color: '' }}> {tab}</span>
                    </Nav.Link>
                </Nav.Item>
            );
        } else {
            items.push(
                <Nav.Item>
                    <Nav.Link href={link + tab} eventKey={tab}>
                        {tab}
                    </Nav.Link>
                </Nav.Item>
            );
        }
    }

    return (
        <Nav variant="tabs" defaultActiveKey="/home" onSelect={handleSelect}>
            {items}
        </Nav>
    );
};

Tabs.propTypes = {
    activeTab: PropTypes.string,
    handleSelect: PropTypes.func,
    link: PropTypes.string,
    tabList: PropTypes.array,
};

export default Tabs;