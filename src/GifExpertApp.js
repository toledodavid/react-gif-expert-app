import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball']);


  // const handleAdd = () => {
  //   // setCategories([...categories, 'Daredevil']);
  //   setCategories(category => [...categories, 'Batman']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr/>

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