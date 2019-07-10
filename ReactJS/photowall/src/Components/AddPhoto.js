import React, {Component} from 'react'
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
            this.props.onAddPhoto( {  
                id: Number(new Date()),  
                description: description,  
                imageLink: link
                })
         }
    }
    render() {
        return <div>
            <h1>Add Photo</h1>
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