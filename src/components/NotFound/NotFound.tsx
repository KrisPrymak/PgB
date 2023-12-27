import { FC } from 'react';
import { NotFoundProps } from './types';
import { Link } from 'react-router-dom';

export const NotFound: FC<NotFoundProps> = () => {
  return (
    <div>Not Found     <Link to={'/'}>home</Link></div>
  );
};
