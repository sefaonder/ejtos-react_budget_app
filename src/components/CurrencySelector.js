import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelector = () => {
    const { dispatch,currency } = useContext(AppContext);

    const [currencyState, setCurrencyState] = useState(currency);
    const [open, setOpen] = useState(false);


    function currencyRenderer(curr){
        let currencyText = ''
        switch (curr) {
            case '$':
                currencyText = '$ Dollar'
                break;
            case '£':
                currencyText ='£ Pound'
                break;
            case '€':
                currencyText = '€ Euro'
                break;
            case '₹':
                currencyText = '₹ Ruppee'
                break;
            default:
                currencyText = '£ Pound'
                break;
        }

        return currencyText
    }

    function handleOptionHandler(value){

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        })

        setCurrencyState(value)
        setOpen(false)

    }

    
    return (
        <div className='alert alert-secondary'>
            <div className="dropdown">
                <button className="dropdown-btn" type="button" aria-expanded="false" onClick={()=>setOpen((prev)=>!prev)}>
                    Currency ({currencyRenderer(currencyState)})
                </button>
                {open && (
                <ul className="dropdown-container">
                    <li><a className="dropdown-item" href="#/dollar" onClick={()=> handleOptionHandler('$')}>$ Dollar</a></li>
                    <li><a className="dropdown-item" href="#/pound" onClick={()=> handleOptionHandler('£')}>£ Pound</a></li>
                    <li><a className="dropdown-item" href="#/euro" onClick={()=> handleOptionHandler('€')}>€ Euro</a></li>
                    <li><a className="dropdown-item" href="#/ruppe" onClick={()=> handleOptionHandler('₹')}>₹ Ruppee</a></li>
                </ul>
                )}
                </div>
            </div>
    );
};
export default CurrencySelector;
