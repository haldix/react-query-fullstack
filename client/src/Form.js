import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postData } from './api';
import { useMutation, useQueryClient } from 'react-query';

const Form = () => {
  const [addPost, setAddPost] = useState({ id: '', title: '' });

  const handleChange = (e) => {
    setAddPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const history = useHistory();

  const mutation = useMutation(
    (formData) => {
      return postData(formData);
    },
    {
      onSuccess: () => {
        history.push('/');
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutation.mutateAsync(addPost);
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
