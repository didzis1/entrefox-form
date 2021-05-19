import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import pageCountReducer from './reducers/pageCountReducer'
import answersReducer from './reducers/answersReducer'

const reducer = combineReducers({
	currentPage: pageCountReducer,
	answers: answersReducer
})

export default createStore(
	reducer,
	composeWithDevTools()
)