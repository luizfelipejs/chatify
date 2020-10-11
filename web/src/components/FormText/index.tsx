import React from 'react';

import './styles.css';

interface formTextProps {
  title: string
  text: string
}

const FormText: React.FC<formTextProps> = ({ title, text }) => {
  return (
    <div className="form-text">
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}

export default FormText;