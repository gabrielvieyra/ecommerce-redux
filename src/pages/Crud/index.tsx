import { FC } from 'react';

// Components
import GetPost from '../../components/GetPost';
import CreatePost from '../../components/CreatePost';
import DeletePost from '../../components/DeletePost';
import UpdatePost from '../../components/UpdatePost';

// Styles
import './styles.scss';

const Crud: FC = () => {
  return (
    <>
      {/* <GetPost /> */}
      {/* <CreatePost /> */}
      {/* <UpdatePost /> */}
      <DeletePost />
    </>
  );
};

export default Crud;
