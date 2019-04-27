import { compose, createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../../reducers/index';


const Store = createStore(
  rootReducer,
  compose(applyMiddleware(logger))
);

export default Store;
