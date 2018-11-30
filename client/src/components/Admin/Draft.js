import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";
import testPost from "../../stores/modalStore";
import { view } from "react-stax";
import styled from "styled-components";
import axios from "axios";
import editorStore from "../../stores/editorStore";

const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
`;

const TitleEdit = styled.div`
  padding: 6vh;
  text-align: left;
  font-size: 2rem;
  width: 100%;
  input {
    font-size: 2rem;
    border: none !important;
  }
`;

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "snow" };
  }

  componentDidMount() {
    const edited = testPost[Number(getQueryVariable("id"))];
    editorStore.title = edited.title;
    editorStore.content = edited.content;
    editorStore.id = edited.id;
    editorStore.author = edited.author;
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:3005/api/articles/edit?content=${
          editorStore.content
        }&title=${editorStore.title}`
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleChange = html => {
    editorStore.content = html;
  };

  handleTitleChange = evt => {
    editorStore.title = evt.target.value;
  };

  render() {
    const { title, content } = editorStore;
    return (
      <div>
        <TitleEdit>
          <input
            type="text"
            name="title"
            onChange={this.handleTitleChange}
            value={title}
          />
        </TitleEdit>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={content}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder={content}
        />
        <Button onClick={this.handleSubmit}>Button</Button>
      </div>
    );
  }
}

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
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
    [{ align: [] }],
    ["link"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
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
export default view(Editor);
