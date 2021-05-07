import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import pageCountReducer from './reducers/pageCountReducer'


// Myöhemmin combineReducer(1,2,3...)
const reducer = pageCountReducer

export default createStore(
	reducer,
	composeWithDevTools()
)