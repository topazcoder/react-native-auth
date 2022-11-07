/**
 *
 * store.js
 * store configuration
 */

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';  

import createReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const middleWares = [sagaMiddleware];

//1
const persistedReducer = persistReducer(persistConfig, createReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleWares))
let persistor = persistStore(store)
// sagaMiddleware.run(rootSaga)

export default {store, persistor}
