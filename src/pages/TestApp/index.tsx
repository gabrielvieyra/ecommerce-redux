import { FC } from 'react';

// Styles
import './styles.scss';

interface TestAppProps {
  title: string;
  subTitle: string;
  name: string;
}

const TestApp: FC<TestAppProps> = ({ title, subTitle, name }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

export default TestApp;
