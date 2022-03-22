import React, { FC } from 'react';
import { loader } from './LoaderStyle';

interface ILoader {
  isLoading?: boolean;
}

const Loader: FC<ILoader> = ({ isLoading }) => {
  if (!isLoading) return null;

  return <div css={loader} />;
};

export { Loader };
