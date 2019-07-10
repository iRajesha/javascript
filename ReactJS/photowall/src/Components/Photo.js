import React from 'react'
import PropTypes from 'prop-types'

function Photo(props){
    const post = props.post
    return <figure className='figure'>
        <img alt={post.description} src={post.imageLink} className='photo'></img>
        <figcaption><p>{post.description}</p></figcaption>
        <div className="button-container"> 
            <button  onClick={()=>{
                   props.onRemovePhoto(post)
            }}>Remove</button>
            </div>
    </figure>
}
Photo.prototype = {
    post : PropTypes.object.isRequired,
    onRemovePhoto : PropTypes.func.isRequired
}


export default Photo

