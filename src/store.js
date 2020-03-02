import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

function parameters(state = {}, { type, values }) {
  console.log(values);
  return state;
}

const rootReducer = combineReducers({
  parameters,
})

const loggerMiddleware = createLogger()

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)
