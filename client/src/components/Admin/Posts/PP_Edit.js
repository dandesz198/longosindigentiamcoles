import React, { Component } from "react";
import {Route} from 'react-router-dom';
import {testDataPost} from "./../PanelTest";



const Edit = ({ match }) => {
    
    const postID = match.params.postID;
    let post = testDataPost.find(post => post.postID == postID );
        return (
            <div className="Panel">
                <h1>{`Editing: ${postID}`}</h1>
                <h1>{`Author: ${post.author}`}</h1>
                <h1>{`Post: ${post.content}`}</h1>
                <h1>{`Published: ${post.published}`}</h1>
                <h1>{`Date Created: ${post.date}`}</h1>
            </div>
        )
    }




export default Edit;