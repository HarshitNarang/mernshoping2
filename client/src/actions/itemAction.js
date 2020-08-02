import * as actions from './types';
import axios from 'axios';

export const getItems = ()=>dispatch=>{
    dispatch(setItemsLoading())
    axios.get('/api/items').then(res=>
        dispatch({
            type:actions.GET_ITEMS,
            payload: res.data
        }))
}

export const addItem = (item)=>dispatch=>{
        axios.post('/api/items',item)
        .then(res=> dispatch({
            type: actions.ADD_ITEM,
            payload: res.data
        }))
}

export const deleteItem = (id)=>dispatch=>{
    axios.delete(`/api/items/${id}`)
    .then(res=> dispatch({
        type: actions.DELETE_ITEM,
        payload: id
    }))
}
export const setItemsLoading = () =>{
    return{
        type: actions.ITEM_LOADING
    }
}