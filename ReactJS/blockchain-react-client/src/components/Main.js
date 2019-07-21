import React,{Component} from 'react'
import Header from './Header'
import {Route} from 'react-router-dom'
import Footer from './Footer'
import Content from './Content'
import BCResponse from './BCResponse'

class Main  extends Component {
    render(){
        //console.log('props in Main are -', this.props)
        //console.log(this.props)
        console.log('Re-rendered Main component with props', this.props)
        return (<div>
             <Header/>
             <Route exact path="/" render={(params)=>(
                <div>
               <Content {...this.props} {...params} submitPayload={this.props.submitPayload}/>
                </div>
             )}></Route>
             <Route path="/BCResponse" render={({history})=>(<div>
                 <BCResponse {...this.props} onHistory={history}></BCResponse>
             </div>)}></Route> 
            <Footer/>                                
        </div>)
    }

}   
  
export default Main