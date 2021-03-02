import React from 'react';
import { getData, deleteData } from './api';
import { useQuery, useMutation, useQueryClient } from 'react-query';

const Posts = () => {
  const queryClient = useQueryClient();

  // Queries
  const { data, error, isLoading, isError } = useQuery('posts', getData);

  const mutation = useMutation(
    (id) => {
      return deleteData(id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );

  const handleDelete = async (e) => {
    const { id } = e.target;
    await mutation.mutateAsync(id);
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
