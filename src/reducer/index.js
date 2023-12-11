import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

import cart from "reducer/cart";

export default (history) => combineReducers({
    router: connectRouter(history),
    cart,
});