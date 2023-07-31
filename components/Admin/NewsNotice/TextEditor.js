import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TextEditor(props) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
        props.sendEdit(editorRef.current.getContent());
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      
      <button onClick={log}>Log editor content</button>
    </>
  );
}
