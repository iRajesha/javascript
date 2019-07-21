import {combineReducers} from 'redux'

function payload(state={}, action){
   console.log('payload reducer called', state, action.type, action.payload)
     switch(action.type){
        case 'SUBMIT_PAYLOAD' : return {payload:action.payload}
        default : return state
     }
 }
 function response(state={}, action){
    //console.log(action.response)
    console.log('response reducer called', state, action.type, action.response)
   switch(action.type){
      case 'LOAD_RESPONSE' : return {response:action.response}
      default : return state
   }
}

const rootReducer = combineReducers({response,payload})
export default rootReducer
