import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";
import { store } from "react-stax";
import styled from "styled-components";
import {create} from './../../api/article'
const TitleEdit = styled.div`
  padding: 6vh;
  box-sizing: border-box;
  text-align: left;
  font-size: 2rem;
  width: 100%;
  input {
    font-size: 2rem;
    border: none !important;
  }
`;

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "snow" };
  }
  store = store({ content: "", title: "" });

  handleSubmit = e =>  {
    e.preventDefault();
    create(store)
  }

  handleChange = html => {
    this.store.content = html;
    console.log(html)
  }

  handleTitleChange = e => {
    this.store.title = e.target.value;
    console.log(this.store.title);
  }

  render() {
    return (
      <div>
        <TitleEdit>
          <input type="text" name="title" placeholder="Title" onChange={this.handleTitleChange} />
        </TitleEdit>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.store.content}
          modules={NewPost.modules}
          formats={NewPost.formats}
          bounds={".app"}
          placeholder={this.store.content}
        />
        <button onClick={this.handleSubmit}>Create Article</button>
      </div>
    );
  }
}

/*
 * Quill modules to attach to NewPost
 * See https://quilljs.com/docs/modules/ for complete options
 */
NewPost.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link"],
    [{'align': 'center'}],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill NewPost formats
 * See https://quilljs.com/docs/formats/
 */
NewPost.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link"
];
export default NewPost;
