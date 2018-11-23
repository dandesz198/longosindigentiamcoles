import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import {store} from 'react-stax'
import styled from 'styled-components';
import axios from 'axios'

const TitleEdit = styled.div`
    padding:6vh;
    box-sizing: border-box;
    text-align: left;
    font-size:2rem;
    width: 100%;
    input{
        font-size:2rem;
        border: none !important;
    }
`;



class NewPost extends React.Component {
    constructor (props) {
      super(props)
      this.state = {theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)
    }
    store = store({content: '', title: ''})

    handleSubmit (e) {
        e.preventDefault();
          axios.post(`http://localhost:3005/api/article?content=${this.store.content}&title=${this.store.title}&postID=${this.store.postID}&author=${this.store.author}`)
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
      }

    handleChange (html) {
        this.store.content = html;
    }

    
    handleTitleChange (evt) {
        this.store.title = evt.target.value;
        console.log(this.store.title)
    }
    

    render () {
      return (
        <div>
            <TitleEdit>
                <label htmlFor='title'>Title:</label>
                <input type='text' name='title' onChange={this.handleTitleChange} ></input>
            </TitleEdit>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.store.content}
            modules={NewPost.modules}
            formats={NewPost.formats}
            bounds={'.app'}
            placeholder={this.store.content}
           />
          <input type='submit' onSubmit={this.handleSubmit}></input>

         </div>

       )
    }
  }
  
  /* 
   * Quill modules to attach to NewPost
   * See https://quilljs.com/docs/modules/ for complete options
   */
  NewPost.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill NewPost formats
   * See https://quilljs.com/docs/formats/
   */
  NewPost.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]
export default NewPost ;