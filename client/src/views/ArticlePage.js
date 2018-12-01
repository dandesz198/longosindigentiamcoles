import React, { Component } from "react";
import { get } from "../api/article";
import articleStore from "../stores/articleStore";
import { view, params } from "react-stax";

class articlePage extends Component {
  async componentDidMount() {
    articleStore.article = await get(params.id);
  }

  render() {
    return (
      <div>
        <h1>{articleStore.article.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: articleStore.article.content }} />
      </div>
    );
  }
}

export default view(articlePage);
