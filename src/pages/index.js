import React from 'react';
import logger from '../lib/logger';
import InitialLoad from '../views/main';
// TODO: Initialize things here
const Main = (props) => (<InitialLoad {...props} />);

export async function getServerSideProps(context) {
    logger.defaultMeta.service = 'Initial Load';
    let cookies, props;

    try {
        logger.info('Grabbing cookies for preexisting data');
        cookies = "nothing";
    } catch (e) {
        logger.error(`No cookies provided: ${e}`);
    }

    if (cookies) {
        try {
            logger.info('Populating props for page to load last session');
            props = { exampleCheck: true };
        } catch (e) {
            logger.error(`Cookies in the wrong format or other error: ${e}`);
        }
    }

    return props;
}

export default Main;
