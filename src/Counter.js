import React from 'react'; /*  opcja 1 */
/*import React, {Component} from 'react';   opcja 2  i w tedy  class Counter extends Component */
import ButtonsPanel from './ButtonsPanel';
import Step from './Step'
/* component classowy posiada informacje o stanie - state */
class Counter extends React.Component {
    constructor(props) {
        super(props);
        /* dziedziczymy wartosc propos z klasy component */

        this.state = {
            counterValue: this.props.initValue,
            defaultValueInput: 1,
        }

        /* to sie musi tak nazywac bo to jest przypisane od górnie i dziedziczone z classy component state        
        this.props.initValue bo pobieramy wartosc poczatkowa jego  atrubutu*/

    }

    addCounterValue = () => {
        this.setState(prevState => {
            return ({ counterValue: prevState.counterValue + this.state.defaultValueInput })

            /*  z pierwotnego stanu wez wartosc i zwieksz ja o jeden   gdy do setState jako pierwszy parametr przekazemy cos to on bd przechowywał pierwotnoa wartosc*/
        })
        /* prevState pokazuje pierwtny stan */
        /* ({ counterValue: 12 })  this odnosi sie do  classy OCmponent. moze miec 2 rodzaje parametrów obiekt lub funkcje 
        obiekt pozwala nadpisac aktualny stan*/

    }
    resetCounter = (reset) => {
        if (reset) {
            this.setState({ counterValue: 0 })
        }
        else {
            this.setState({ counterValue: this.props.initValue })
        }
    }

    changeDefaultValue = (e) => {
        this.setState({
            defaultValueInput: Number(e.target.value)
        })

        /*  console.log(e.target.value); */
        /* wywołuje  obiekt który wywołuje zdarzenie */



    };

    render() {
        /* render wyswietla w przegladarce wiec zeby cos wyswietlic musi byc cos do niego zwrocone tak jak w function */
        return (
            <div className='counter'> {/* dodanie klasy className */}
                Licznik: {this.state.counterValue}

                <ButtonsPanel
                    addValue={this.addCounterValue}
                    resetValue={this.resetCounter}
                    stepValue={this.state.defaultValueInput}

                />

                <Step inputValue={this.state.defaultValueInput} changeValueInput={this.changeDefaultValue} />

                {/* onClick - wywołanie zdarzenia na click */}
            </div >
        );
        /* przez props wyciagamy wartosc przypisna do atrybutu . propst wyswietla w konsoli obiekt i zeby pobrac jej wartosc trzeba pobrac klucz do wartosci ktora chcemy wyswietlic */
    }
}

export default Counter;