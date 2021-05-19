import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import pageCountReducer from './reducers/pageCountReducer'
import answersReducer from './reducers/answersReducer'
import validationReducer from './reducers/validationReducer'

const reducer = combineReducers({
	currentPage: pageCountReducer,
	answers: answersReducer,
	validation: validationReducer
})

export default createStore(
	reducer,
	composeWithDevTools()
)