import _posts from '../data/post'
import {combineReducers} from 'redux'
function posts(state=_posts, action){
   // console.log('state in posts reducer '+state)
    switch(action.type){
       case 'REMOVE_POST' : return [...state.slice(0,action.index),...state.slice(action.index+1)]
       case 'ADD_POST' :    return [...state,action.post]
       default : return state
    }
}
function comments(state={}, action){
    //console.log('state in comments reducer '+action.postId)
    //console.log(action)
    switch(action.type){
     case 'ADD_COMMENT' : 
    // console.log(action.postId)
    if(!state[action.postId]){
        return {...state,[action.postId]:[action.comment]}
    }else {
        return {...state,[action.postId]:[...state[action.postId],action.comment]}
    }
    
     default : return state
    }
   
}
const rootReducer = combineReducers({comments,posts})
export default rootReducer
