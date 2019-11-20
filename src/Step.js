import React from 'react';

const Step = props => {
    return (
        <div className="stepPanel">
            <p>Krok:</p>
            <input type="number" value={props.inputValue} onChange={props.changeValueInput} />
        </div >
    )
}
export default Step;