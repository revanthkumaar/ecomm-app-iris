import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import shopReducer from './shop/shop.reducer'


const rootReducer = combineReducers({
    shop: shopReducer
});

export default rootReducer;