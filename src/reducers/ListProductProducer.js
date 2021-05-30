import * as Actions from "./../constants/ActionTypes";

const defaultState = [
    {
        name: "aplusautomation",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        image: "",
        price: 12
    },
    {
        name: "aplus media",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        image: "",
        price: 10
    },
    {
        name: "robo fig combo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        image: "",
        price: 9
    },
    {
        name: "target leap frog",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        image: "",
        price: 2
    }
];

const ListProductProducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.ADD_TO_CART:
            return state;
        default:
            return state;
    }
}

export default ListProductProducer;