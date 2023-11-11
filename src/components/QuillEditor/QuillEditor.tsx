import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // импорт стилей Quill

const QuillEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value: any) => {
    setContent(value);
  };

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
    />
  );
};

export default QuillEditor;