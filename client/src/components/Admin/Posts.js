import React from 'react';
import Draft from './Draft'
import {Router, Link} from 'react-stax';
import testPost from './../../stores/postStore'
import styled from 'styled-components'

const ListWrapper = styled.div`
    a, p{
        display: inline-grid;
        width: 80%;
        margin: 1rem auto;
        grid-template-columns: 20% 30% 50% ;
        background-color: #1e272e;
        padding: 1rem;
        color: white;
        text-decoration: none;
    }
    p{
        background-color: transparent;
        color: #1e272e;
        margin-bottom: -1rem;
        font-size:1.3rem;
    }
`;


const List = ()=>{
    return(
        <div>
            <ListWrapper>
                <p><span>PostID</span><span>Author</span><span>Title</span></p>
            {testPost.map((post)=>
                <Link key={post.postID} to={`../editor/?id=${post.postID}`}><span>{post.postID}</span><span>{post.author}</span><span>{post.title}</span><br/></Link>
            )}
            </ListWrapper>
            
            
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