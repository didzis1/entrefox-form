import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

import {
	ThemeProvider,
	createMuiTheme,
	responsiveFontSizes
} from '@material-ui/core/styles'
import { yellow, lime } from '@material-ui/core/colors'

let theme = createMuiTheme({
	palette: {
		primary: lime,
		secondary: yellow
	}
})

theme = responsiveFontSizes(theme)

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
)
