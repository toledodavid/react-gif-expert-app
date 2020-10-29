import React, { useState } from 'react';

const GifExpertApp = () => {

  //const categories = ['One punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);


  const handleAdd = () => {
    // setCategories([...categories, 'Daredevil']);
    setCategories(category => [...categories, 'Batman']);
  }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr/>

      <button onClick={handleAdd}>Add</button>

      <ol>
        {
          categories.map(category => {
          return <li key={category}>{category}</li>
          })
        }
      </ol>
    </>
  );
}

export default GifExpertApp;