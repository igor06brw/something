import * as actions from "../actions/actionTypes";

const outfitReducer = (state = [], action) => {
    switch (action.type) { 
        case actions.ADD_OUTFIT_START:
            return state;
        case actions.ADD_OUTFIT_SUCCESSFULL:
            return {...state, outfits: action.payload}
        case actions.ADD_OUTFIT_ERROR:
            return state;
        default:
            return state;
    }
}

export default outfitReducer;