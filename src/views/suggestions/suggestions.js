// TODOs
/*  1. Create logic to read what items player currently has, and what games they are playing
    2. Generate text based on a hashmap of arrays telling the player what they can do
    3. Create links to go to other components, like Glitches, and open up a window for them
    4. Create a checkbox and a toggle to show or hide checked suggestions




*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './suggestions.module.scss';

const Suggestions = (props) => {
    const {
        suggestionList
    } = props;

    const [suggestions, setSuggestions] = useState(suggestionList);

    return (
    <>
        
    </> 
    );
};


Suggestions.propTypes = {
    suggestionList: PropTypes.object,

};

export default Suggestions;

