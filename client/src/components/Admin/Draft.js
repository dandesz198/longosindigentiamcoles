import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React from 'react';
import testPost from './../../stores/postStore';
import {store} from 'react-stax'
import styled from 'styled-components';
import axios from 'axios'


const TitleEdit = styled.div`
    padding:6vh;
    text-align: left;
    font-size:2rem;
    width: 100%;
    input{
        font-size:2rem;
        border: none !important;
    }
`;

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] === variable){return pair[1];}
       }
       return(false);
}



class Editor extends React.Component {
    constructor (props) {
      super(props)
      this.state = {theme: 'snow' }
      this.handleChange = this.handleChange.bind(this)
      this.handleTitleChange = this.handleTitleChange.bind(this)
    }
    edited = testPost[Number(getQueryVariable('id'))];
    store = store({content: this.edited.content, title: this.edited.title, postID: this.edited.postID})

    handleSubmit (e) {
      e.preventDefault();
        axios.put(`http://localhost:3005/api/article?content=${this.store.content}&title=${this.store.title}&postID=${this.store.postID}&author=${this.store.author}`)
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
        console.log(evt.target.value)
    }
    

    render () {
      return (
        <div>
            <TitleEdit>
                <label htmlFor='title'>Title:</label>
                <input type='text' name='title' onChange={this.handleTitleChange} value={this.edited.title}></input>
            </TitleEdit>
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.store.content}
            modules={Editor.modules}
            formats={Editor.formats}
            bounds={'.app'}
            placeholder={this.store.content}
           />
          <input type='submit' onSubmit={this.handleSubmit}></input>
         </div>

       )
    }
  }
  
  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
  Editor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      [{'align': []}],
      ['link'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link'
  ]
export default Editor ;