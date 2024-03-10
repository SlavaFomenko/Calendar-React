import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store/index'
import { EvetsContextProvider } from './context/eventsContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<EvetsContextProvider>
			<App />
		</EvetsContextProvider>
	</Provider>
)
