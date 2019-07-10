import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
//const myTasks = ['do that','do this','do everything'];


ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>,document.getElementById('root'))