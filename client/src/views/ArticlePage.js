import React, { Component } from "react";
import { params, view } from "react-stax";
import { get } from "../api/article";

let article;

class articlePage extends Component {

  async componentWillUpdate() {
    console.log(params.id);
    console.log(await get(params.id));
  }

  render() {
    return (
      <div>
        <h1>article.title</h1>
        {article.content}
        <p>asd</p>
      </div>
    )
  }
}

export default articlePage

