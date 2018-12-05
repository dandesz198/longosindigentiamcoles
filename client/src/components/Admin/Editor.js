import React from "react";
import ReactQuill from "react-quill";
import { view } from "react-stax";
import "react-quill/dist/quill.bubble.css";
import styled from "styled-components";
import { create } from "../../api/article";
import editorStore from "../../stores/editorStore";

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
  height: 100%;

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

class Editor extends React.Component {
  constructor(props) {
    super(props);
    const article = editorStore.articleData();
    this.state = {
      theme: "bubble",
      ...article,
      isNew: !!!article.id
    };
  }

  componentWillMount() {
    console.log("kurva anyadat");
  }

  componentWillUnmount() {
    editorStore.empty();
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = html => {
    this.setState({ content: html });
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.handleSubmit}>{`${
          this.state.isNew ? "Edit" : "Create"
        } Article`}</Button>
        <TitleEdit>
          <input
            maxLength="50"
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleTitleChange}
          />
        </TitleEdit>
        <ReactQuill
          theme={this.state.theme}
          onChange={this.handleChange}
          value={this.state.content}
          modules={Editor.modules}
          formats={Editor.formats}
          bounds={".app"}
          placeholder=""
        />
      </Wrapper>
    );
  }
}

/*
 * Quill modules to attach to NewArticle
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link"],
    [{ align: "center" }],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill NewArticle formats
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
