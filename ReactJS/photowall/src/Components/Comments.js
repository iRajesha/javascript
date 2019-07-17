import React,{Component} from 'react'
class Comments extends Component {
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const comment = event.target.elements.comment.value
        console.log('Clicked on Id is',  this.props.id )
        this.props.addComment(comment, this.props.id)
    }
    render() {
       
        return <div>
            {this.props.comments.map((comment,index)=> {
                return <p key={index}>
                    {comment}
                </p>
            })}
                <form className='comment-form' onSubmit={this.handleSubmit}>
                    <input type='text' name='comment' placeholder='comment'/>
                    <button type='submit'/>
                </form>
               </div>
    }
}
export default Comments