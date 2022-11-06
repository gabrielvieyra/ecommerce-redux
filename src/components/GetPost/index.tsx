import { FC, useState, useEffect } from 'react';
import { ResponseAPI } from '../../api/client';
import { getPosts } from '../../utils/getData';

// Styles
import './styles.scss';

const GetPost: FC = () => {
  const [posts, setPost] = useState<Array<ResponseAPI>>([]);

  useEffect(() => {
    getPosts().then(data => setPost(data));
  }, []);

  return (
    <>
      <h1>Get Post</h1>
      <h2>post list</h2>
      <div className='grid'>
        {posts.map((post, index) => {
          const { userId, title, body, id } = post;
          return (
            <div key={id ? id : index}>
              <p>
                Title: <span>{title}</span>
              </p>
              <p>
                Body: <span>{body}</span>
              </p>
              <p>
                User: <span>{userId}</span>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetPost;
