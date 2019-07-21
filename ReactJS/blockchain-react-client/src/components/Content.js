import React, {Component} from 'react'
class Content extends Component {
    constructor(){
            super()
            this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }
    handleOnSubmit(event){
      
    event.preventDefault()
    console.log('Inside handleOnSubmit')
    let payload = event.target.elements.payload.value
    this.props.submitPayload(payload)
    this.props.history.push("/BCResponse")
    }
    render() {
        console.log('Re-rendered Content component with props', this.props)
            return <div>
            <form className="form" onSubmit={this.handleOnSubmit}>  
                <textarea rows="10" cols="100" name="payload" placeholder="Enter your payload"></textarea>
                <button  type="submit" > Submit</button>
            </form>
        </div>
    }
}
export default Content