import thunk from 'redux-thunk';
import { applyMiddleware, createStore} from 'redux'
import { routerMiddleware } from 'react-router-redux';
import history from './history';
import reducers from './reducers';


function configureStore(initialState = {}) {
    let middleware = applyMiddleware(thunk, routerMiddleware(history));

    const store = createStore(reducers, initialState, middleware);

    return store;
}


export default configureStore;