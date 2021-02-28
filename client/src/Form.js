import React, { useState } from 'react';
import { postData } from './api';
import { useMutation } from 'react-query';

const Form = () => {
  const [addPost, setAddPost] = useState({ id: '', title: '' });

  const handleChange = (e) => {
    setAddPost({ ...addPost, [e.target.name]: e.target.value });
  };

  const mutation = useMutation((formData) => {
    return postData(formData);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(addPost);
    setAddPost({ id: '', title: '' });
  };
  return (
    <div>
      <form id='form' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Input to backend</legend>
          <label htmlFor='id'>ID</label>
          <input
            name='id'
            id='id'
            type='text'
            value={addPost.id}
            onChange={handleChange}
          />
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            name='title'
            value={addPost.title}
            onChange={handleChange}
          />
          <input type='submit' value='Submit' />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
