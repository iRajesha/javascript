import React,{Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import Single from './Single'


class Main  extends Component {
    constructor() {
        super()
           
    }
   
    render(){
        //console.log('props in Main are -', this.props)
        
        return (<div>
             <Title/>
             <Route exact path="/" render={()=>(
                <div>
                <PhotoWall {...this.props} />  
                </div>
             )}></Route>
             <Route path="/AddPhoto" render={({history})=>(<div>
                 <AddPhoto {...this.props} onHistory={history}></AddPhoto>
             </div>)}>
                </Route> 
            <Route path="/single/:id" render={(parmas)=>(
            <Single {...this.props} {...parmas}  />
            )}>
            </Route> 
                                 
        </div>)
    }

}   
  
export default Main