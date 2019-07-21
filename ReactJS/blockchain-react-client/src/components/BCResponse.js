import React, {Component} from 'react'
import Axios from 'axios'
class BCResponse extends Component {
    constructor(props){
        super(props)
        
        this.state={isResponseLoading:true}
        //console.log(this.state)
    }
   async componentDidMount(){
        let response = await Axios.request({
           
            url:'http://dummy.restapiexample.com/api/v1/employees',
            responseType:'json',
            method:'GET',
            crossDomain:true
        })
        this.setState({
            isResponseLoading:false
        })
        //this.state.isResponseLoading=false
        this.props.loadResponse(response)
        

        //console.log(response)
    }
   
    render() {
        console.log('Re-rendered BCResponse component with props', this.props)
        return <div>
            <p> Request </p> 
            <textarea rows="20" cols="100" defaultValue={JSON.stringify(this.props.payload)}></textarea> 
            <p> Response </p> 
            {!this.state.isResponseLoading ? <textarea readOnly rows="20" cols="100" value={JSON.stringify(this.props.response)}></textarea> : <h3>Loading ...</h3>} 
        </div>
    }
}
export default BCResponse