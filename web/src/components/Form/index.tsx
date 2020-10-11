import React from 'react';

import './styles.css';

const Form: React.FC = ({children}) => {
  return (
    <form className="Form">
      {children}
    </form>
  )
}

export default Form;