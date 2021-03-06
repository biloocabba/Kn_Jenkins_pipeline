import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from "redux-logger";



const middleware = [thunk]

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger))
)

export default store
