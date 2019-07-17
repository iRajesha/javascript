import React, {Component} from 'react'
import Title from './Title'
class AddPhoto extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
         event.preventDefault()
         const link = event.target.elements.link.value
         const description = event.target.elements.description.value
         if(link && description){
            this.props.addPost( {  
                id: Number(new Date()),  
                description: description,  
                imageLink: link
                })
            this.props.onHistory.push("/")
         }
         
    }
    render() {
        return <div>
            <Title/>
            
            <div className="form">
            <form onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="Link" name="link"></input>
                <input type="text" placeholder="Description" name="description"></input>
                <button>Add</button>
            </form>
           
            </div>
        </div>
    }
}
export default AddPhoto;