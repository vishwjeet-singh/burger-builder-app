import React from 'react';

import Aux from '../../../Hoc/Auxilliary';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient)
    .map(igKey => {
        return <li key ={igKey}> <span style={{textTransform :'capitalize'}}>{igKey}</span> : {props.ingredient[igKey]}</li>
    })

    return (
        <Aux>
            <h3>Your order</h3>
            <p>The cooked deliciousness in our burger contains following ingredient</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked = {props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked = {props.purchaseContinue}>Continue</Button>
        </Aux>
    );
}
export default orderSummary;