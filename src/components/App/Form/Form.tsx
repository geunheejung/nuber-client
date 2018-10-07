import React from 'react';

interface IProps {
  onSubmit: any;
}

const Form: React.SFC<IProps> = ({ onSubmit, children }) => {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    />      
  )
}

export default Form;