import {applyMiddleware, createStore, combineReducers } from 'redux';
import characters from '../reducers/characters';
import character from '../reducers/character';
import filters from '../reducers/filters';
import thunk from "redux-thunk";


export const rootReducer = combineReducers({characters, character, filters})
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>
