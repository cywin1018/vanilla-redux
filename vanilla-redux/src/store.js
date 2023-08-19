import { createStore } from "redux";
import {configureStore,createAction, createReducer} from "@reduxjs/toolkit/";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             return [{ text: action.text, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.id);
//         default:
//             return state;
//     }
// };
    const reducer = createReducer([],{
        [addToDo]:(state,action)=>{
            state.unshift({text:action.payload.text,id:action.payload.id})
        },
        [deleteToDo]:(state,action)=>{
            state.filter((toDo)=>toDo.id !== action.payload);
        }
    })
// const store = createStore(reducer);
const store = configureStore({reducer});
export default store;
