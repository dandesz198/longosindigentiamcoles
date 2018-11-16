import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import { testDataPost } from "./../PanelTest";
import Edit from "./PP_Edit"



const postTable = ({ match }) => {

        let tableRows = testDataPost.map((post, index) => {
            return (
                <Link key={index} to={`${match.path}edit/${post.postID}`} className="table_row">
                    <div className="role">{post.postID}</div>
                    <div className="name">{post.author}</div>
                    <div className="role">{post.date}</div>
                    <div className="role">{post.content.length}</div>
                    <div className="role">{post.published ? "yes" : "no"}</div>
                </Link>
            );
        });

        return (
            <div className="IdegesitoFos">
                <h1>Posts</h1>
                <div className="table">
                    <div className="table_row head">
                    <div>ID</div>
                    <div>Author</div>
                        <div>Date</div>
                        <div>Content</div>
                        <div>Published</div>
                    </div>
                    <div className="scrollable">
                        {tableRows}
                    </div>

                </div>
            </div>

        )
}



const PanelPost = ({ match }) => {
    return (
        <div className="Panel">
            <Route exact path={match.path + "/"} component={postTable} />
            <Route exact path={match.path + "/edit/:postID"} component={Edit} />


        </div>
    )
}




export default PanelPost;