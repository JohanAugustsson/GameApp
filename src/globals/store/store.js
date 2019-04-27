import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../../reducers/index';


const Store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk,logger))
);

export default Store;
