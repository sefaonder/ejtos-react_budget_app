import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch,budget,expenses,currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const [price, setPrice] = useState(budget);

    function handleBudgetUpdate(price) {
        setPrice(price)
        if(price * 1 > 20000){
            alert('Budget maximum value is 20,000')
            setPrice(budget)
            return;
        }
        
        if(price * 1 < totalExpenses){
            alert('It should not allow for the budget to be lower than the spending')
            setPrice(budget)
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: price * 1,
        });
    }
    return (
        <div className='alert alert-secondary d-flex'>
            <span>Budget:</span>
            <span>{currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                value={price}
                style={{ marginLeft: '1rem' , size: 10}}
                onChange={(event) => handleBudgetUpdate(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
