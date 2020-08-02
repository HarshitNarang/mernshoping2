import {v1 as uuid} from 'uuid';
import * as actions from '../actions/types';

const initialState={
    items:[],
    loading: false
}

export default function itemReducer(state=initialState, action){
    switch(action.type){
        case actions.GET_ITEMS:
            return{
                ...state,
                items: action.payload,
                loading: false
            }
        case actions.ADD_ITEM:
            return{
                ...state,
                items:[action.payload,...state.items]
            }   
        case actions.DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item=> item._id !== action.payload)
            }
        case actions.ITEM_LOADING:
            return{
                ...state,
                loading: true
            }
        
        default:
            return state;
    }
}