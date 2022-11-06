import { FC, useState } from 'react';
import { ResponseAPI } from '../../api/client';
import { createPost } from '../../utils/createPost';

// Styles
import './styles.scss';

const CreatePost: FC = () => {
  const [posts, setPosts] = useState<Array<ResponseAPI>>([]);

  async function handleClick(): Promise<void> {
    const newPost = await createPost('New title', 'something', Date.now());
    console.log(newPost);
    setPosts([...posts, newPost]);
  }

  return (
    <>
      <h1>Create Post</h1>
      <button onClick={handleClick}>Add Post</button>
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

export default CreatePost;
