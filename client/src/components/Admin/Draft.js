import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import React from "react";
import { view } from "react-stax";
import styled from "styled-components";
import editorStore from "../../stores/editorStore";
import { get, update } from "../../api/article";
import { async } from "rxjs/internal/scheduler/async";


const Button = styled.button`
  border: none;
  background-color: #57606f;
  width: 100%;
  padding: 1rem;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  transition: 0.2s ease background-color;
  position: absolute;
  bottom: 0;
  left: 0;
  &:hover {
    background-color: #747d8c;
  }
`;

const TitleEdit = styled.div`
  padding: 6vh;
  box-sizing: border-box;
  text-align: left;
  width: 100%;
  input {
    width: 100%;
    font-size: 2.5rem;
    color: #2f3542;
    text-align: center;
    border: none !important;
  }
`;
const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  .ql-editor {
    height: 70vh;
    width: 100%;
    text-align: center !important;
    font-size: 1.3rem;
    color: #444;
    h1 {
      color: #2f2f2f;
    }
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
    this.state = { theme: "bubble" };
  }

  async componentDidMount() {
    const edited = await get(Number(getQueryVariable("id")));
    console.log(editorStore)
    editorStore.title = edited.title
    editorStore.content = edited.content
  }

  componentWillUnmount(){
    editorStore.title = ""
    editorStore.content = ""
  }

  handleSubmit = e => {
    e.preventDefault();
    update(Number(getQueryVariable("id")), editorStore)
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
      <Wrapper>
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
        <Button onClick={this.handleSubmit}>Update Article</Button>
      </Wrapper>
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
