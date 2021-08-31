import './seasonDisplay.css';
import react from 'react';


const seasonConfig = {
    summer : {
        text : 'Let\'s hit the beach',
        iconName : 'sun'
    },
    winter : {
        text : 'burr! it is cold',
        iconName : 'snowflake'
    }
};
const getSeason = (lat, currMonth) => {
    if(currMonth>2 && currMonth<9){
        return lat>0 ? 'summer' : 'winter';
    } else{
        return lat>0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return(
        <div className={`season-display ${season}`}> 
            <i className={`icon-left massive ${iconName} icon `}></i>
            <h3> {season} season </h3>
            <h1>{text}</h1> 
            <i className={`icon-right massive ${iconName} icon `}></i>
        </div>
    );
}

export default SeasonDisplay;