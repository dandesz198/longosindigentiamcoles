import React from 'react';
import Draft from './Draft'
import draft from '../../stores/editorStore';
import {Router, Link} from 'react-stax';
import testPost from './../../stores/postStore'





const List = ()=>{
    return(
        <div>
            {testPost.map((post)=>
                <Link to={`../editor/?id=${post.postID}`}>ID: {post.postID}Author: {post.author} Title: {post.title}<br/></Link>
            )}
            
        </div>
    )
}

const Posts = ()=>{
    return( 
        <Router defaultPage="list">
                    <List page='list'/>
                    <Draft page='editor'/>
        </Router>
    )
};


export default Posts;