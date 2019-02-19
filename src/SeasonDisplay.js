import React from 'react';
// import ReactDOM from 'react-dom';

const seasonConfig = {
    summer: {
        text: 'Wow it\'s hot, let\'s go to beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrr, it\'s cold',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat < 0 ? 'summer' : 'winter'
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return(
        <div>
            <i className = {`${iconName} icon`} />
            <h1>{text}</h1>
            <i className = {`${iconName} icon`} />
        </div>
        )
}

export default SeasonDisplay;