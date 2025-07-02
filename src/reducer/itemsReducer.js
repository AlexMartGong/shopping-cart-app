import {ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY_ITEM} from "./itemsAction.js";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state,
                {
                    ...action.payload,
                    quantity: 1
                }
            ];
        case UPDATE_QUANTITY_ITEM:
            return state.map(item => {
                if (item.id === action.payload.id) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            });
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}