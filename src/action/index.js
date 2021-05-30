import * as Actions from "./../constants/ActionTypes";

const actionAddToCart = () => {
    return {
        type: Actions.ADD_TO_CART
    }
}

const actionRemoveFromCart = () => {
    return {
        type: Actions.REMOVE_FROM_CART
    }
}