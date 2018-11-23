import React, { Component } from "react";
import { params, view } from "react-stax";
import articleStore from '../stores/articleStore'

const selectArticle = () => {
  const id = params.id
  articleStore.articles.forEach(e => {
    console.log(e.id);
    if(e.id === id) {
      return articleStore.articles.indexOf(e)
    }
  });
}

const index = 0
console.log(articleStore);


export default view(() => (
      <div>
        <h1>{articleStore.articles[index].title}</h1>
        <p>{articleStore.articles[index].text}</p>
      </div>
));
