import React from 'react';
const ButtonsPanel = props => {
    return (
        <div className="buttonsPanel" stepValue={props.stepValue}>
            <button onClick={props.addValue}>Add </button>
            <button onClick={() => props.resetValue(false)}>Reset</button>
            <button onClick={() => props.resetValue(true)}>Set 0</button>


            {/* zostosowalismy jedna metode ktore przyjmuja rozne paramtery i zastosowalismy ins.warunkkowa i co ma sie dziac gdy jest false a co gdy jest true 
            props.resetValue(true) tak nie mozna bo od razu sie wywowała wiec japrzypisujemy do funkcji anonimowej */}

            {/* to wszystko co jest pozniej przeniselismy do buttons panel */}
            {/*  <button onClick={() => this.addCounterValue()}> */}
            {/*   <button onClick={ this.addCounterValue}> efekt ten sam, po clicku jest przypisana ta wartosc funkcji czyli ja wywoluje. mozna tak robic gdy nei przekujazemy do funkcji parametrów */}

            {/*  </button> */}


        </div >
    )
}
export default ButtonsPanel;