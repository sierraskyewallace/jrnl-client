import React from "react";

// component for current users moods
const Moods = ({ moods }) => {
    const moodsList = moods.map((mood) => {
        return (<p> {mood.name} </p>);
    });
    return (
        <div className="Moods">
            {moodsList}
        </div>
    );
};




export default Moods;