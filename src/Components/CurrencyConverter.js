import React , {Component} from 'react';

class Currency extends Component {
    state = {
        currencyChosen: false, 
        selectedCurrency: 'Select Currency',
        amount: 0
    };
    
    handleAmountIncrease = () => {
        this.setState((prevState) => {
            return {
                amount: prevState.amount + 1
            }
        })
    }

    //Following the detailed instructions function
    handleAmountDecrease = () => {
        this.setState((prevState) => {
            return {
                amount: (prevState.amount -= 1)
            }
        })
    }
    
    //Below is the amount decrease function from the solution
    //not sure why it is different from the function in the
    //detailed instructions - my guess is this is part of the
    //Black Diamond solution
    // handleAmountDecrease = () => {
	// 	return (
	// 		this.state.amount > 0 &&
	// 		this.setState((prevState) => {
	// 			return {
	// 				amount: prevState.amount - 1
	// 			}
	// 		})
	// 	)
	// }

    handleOptionSelect = (evt) => {
		const userValue = evt.target.value
		this.setState(() => {
			return {
				selectedCurrency: userValue,
				currencyChosen: userValue === 'Select Currency' ? false : true
			}
		})
	}

    render() {
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
            { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
        ];

		const currencyOptions = currencyData.map((currency, index) => (
			<option key={index} value={index}>
				{currency.name}
			</option>
		))

        return (
            // TBD
            <div>
                <select value={this.state.selectedCurrency} onChange ={this.handleOptionSelect}>
                    <option value='Select Currency'>Select Currency</option>
                    {currencyOptions}
                </select>
                <div>
                    <button className='add' onClick={this.handleAmountIncrease}>+</button>
                    <button className='minus' onClick={this.handleAmountDecrease}>-</button>
                </div>
                    {/* {this.props.render(
                        currencyData[this.state.selectedCurrency],
                        this.state.amount
                    )} */}
                    				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<p>Please Select Currency</p>
				)}
            </div>
        ) 
    }
}
export default Currency