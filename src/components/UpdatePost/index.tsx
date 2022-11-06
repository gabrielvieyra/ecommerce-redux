import { FC, useState, useEffect } from 'react';
import { ResponseAPI } from '../../api/client';
import { getPosts } from '../../utils/getData';
import { updatePost } from '../../utils/updatePost';

// Styles
import './styles.scss';

const UpdatePost: FC = () => {
  const [posts, setPosts] = useState<Array<ResponseAPI>>([]);

  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

  async function handleUpdate(id: number): Promise<void> {
    const body = 'Body update';
    const title = 'Title update';
    const userId = Date.now();

    const postUpdate = await updatePost({ id, body, title, userId });
    // console.log(postUpdate);
    // const newArr = posts.filter(post => post.id !== id);
    // console.log(newArr);
    // const newArr02 = [...newArr, postUpdate];
    // console.log(newArr02);
    setPosts([postUpdate, ...posts.filter(post => post.id !== id)]);
  }

  return (
    <>
      <h1>Update Post</h1>
      <h2>Click a card</h2>
      <div className='grid'>
        {posts.map((post, index) => {
          const { userId, title, body, id } = post;
          return (
            <div className='card' key={id ? id : index} onClick={() => handleUpdate(id)}>
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

export default UpdatePost;
