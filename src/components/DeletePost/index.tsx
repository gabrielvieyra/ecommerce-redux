import { FC, useState, useEffect } from 'react';
import { ResponseAPI } from '../../api/client';
import { getPosts } from '../../utils/getData';
import { deletePost } from '../../utils/deletePost';

// Styles
import './styles.scss';

const DeletePost: FC = () => {
  const [posts, setPosts] = useState<Array<ResponseAPI>>([]);

  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

  async function handleDelete(id: number): Promise<void> {
    const isSuccess = await deletePost(id);
    if (isSuccess) {
      setPosts(posts.filter(post => post.id !== id));
    }
  }

  return (
    <>
      <h1>Delete Post</h1>
      <h2>Click a card</h2>
      <div className='grid'>
        {posts.map((post, index) => {
          const { userId, title, body, id } = post;
          return (
            <div className='card' key={id ? id : index} onClick={() => handleDelete(id)}>
              <p>
                ID: <span>{id}</span>
              </p>
              <p>
                Title: <span>{title}</span>
              </p>
              <p>
                Body: <span>{body}</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DeletePost;
