import React from 'react'
import ReactDOM from 'react-dom'
import './styles/bc_react_client.css'
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './redux/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './components/App'


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'))