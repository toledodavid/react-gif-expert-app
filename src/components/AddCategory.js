import React, { useState } from 'react';

const AddCategory = () => {

  const [inputValue, setInputValue] = useState('Type something');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default AddCategory;