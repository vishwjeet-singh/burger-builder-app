import React , {Component} from 'react';
import Aux from '../../Hoc/Auxilliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal'

const IngredientPrices = {
    meat : 10,
    cheese : 5,
    bacon : 3.5,
    salad : 2.5
}
class BurgerBuilder extends Component {
    
    state =  {
        ingredients:  {
            meat :0,
            cheese : 0,
            bacon : 0,
            salad : 0
        },
        totalPrice : 5,
        Purchasable : false,
        purchasing : false
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = IngredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState(
            {
                totalPrice : newPrice,
                ingredients : updatedIngredients
            }
        );
        this.updatePurchasestate(updatedIngredients);

    }
    removeingredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount === 0)
        return;
        const updatedCount = oldCount - 1;
        
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = IngredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState(
            {
                totalPrice : newPrice,
                ingredients : updatedIngredients
            }
        );
        this.updatePurchasestate(updatedIngredients);
    }
    updatePurchasestate = (ingredients) =>{
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el)=>{return (sum+el);},0);
        this.setState({
            Purchasable: sum > 0
        });

    }
    purchaseCancelHandler = ()=>{
        this.setState({purchasing : false});
    }
    purchaseContinueHandler = ()=>{
        alert('You continue');
    }
    purchaseHandler = ()=>{
        this.setState({purchasing:true});
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        //console.log(disabledInfo);
        return (
            <Aux>
                <Modal show ={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                    <OrderSummary
                    totalPrice = {this.state.totalPrice}
                    ingredient = {this.state.ingredients}
                    purchaseContinue = {this.purchaseContinueHandler}
                    purchaseCanceled = {this.purchaseCancelHandler}/>
                </Modal>
                <Burger ingredients ={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded ={this.addIngredientHandler}
                ingredientRemoved = {this.removeingredientHandler}
                disabled = {disabledInfo}
                purchasable ={this.state.Purchasable}
                purchasemode ={this.purchaseHandler}
                price = {this.state.totalPrice}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;