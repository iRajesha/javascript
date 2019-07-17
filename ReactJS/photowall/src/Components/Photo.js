import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Photo(props){
    const post = props.post
  //  console.log(post)
    return <figure className='figure'>
        <Link to={`/single/${post.id}`}><img alt={post.description} src={post.imageLink} className='photo'></img> </Link> 
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container"> 
            <button  onClick={()=>{
              console.log('Index is '+ props.index)
                  props.removePost(props.index)
                  props.history.push('/')
            }}>Remove</button>
            </div>
    </figure>
}
Photo.prototype = {
    post : PropTypes.object.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}


export default Photo

