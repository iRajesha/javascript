import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component {
    render() { 
        //console.log(this.props)
        const {match,posts} = this.props
        const post = posts.find((post)=>{return post.id === Number(match.params.id)})
        const comments = this.props.comments[post.id] || []
        const index = posts.findIndex((post) => post.id === Number(match.params.id))
        console.log('posts are', posts)
        console.log('index is' , index)
         return <div className='single-photo'>
             
                <Photo post={post} {...this.props} index ={index} />
                <Comments addComment={this.props.addComment} comments ={comments} id={post.id} />
               
            
            
            </div>
    }
}

export default Single