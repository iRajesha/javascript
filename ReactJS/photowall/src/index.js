import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import rootReducer from './redux/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './Components/App'


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'))