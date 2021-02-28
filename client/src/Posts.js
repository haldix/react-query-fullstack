import React from 'react';
import { getData } from './api';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const Posts = () => {
  // const queryClient = useQueryClient();

  // Queries
  const { data, error, isLoading, isError } = useQuery('posts', getData);

  const handleDelete = async (e) => {
    const { id } = e.target;
    //const posts = await deleteData(id);
    // setPosts(posts);
  };

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>Data from backend</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            {post.title}
            <button id={post.id} onClick={handleDelete}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
