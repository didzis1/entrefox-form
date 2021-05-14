import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import pageCountReducer from './reducers/pageCountReducer'
import answersReducer from './reducers/answersReducer'

// Myöhemmin combineReducer(1,2,3...)
const reducer = combineReducers({
	currentPage: pageCountReducer,
	answers: answersReducer
})

export default createStore(
	reducer,
	composeWithDevTools()
)