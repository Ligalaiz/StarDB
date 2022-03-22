import React, { FC } from 'react';
import { IStardbData } from '@src/interfaces';
import { useAction } from '@src/hooks/useAction';
import { Loader } from '@components/Loader';
import * as l from './List.style';

interface IList {
  data: IStardbData[] | null;
  isLoading: boolean;
}

const List: FC<IList> = ({ data, isLoading }) => {
  const { setCurrentData, setCurrentID } = useAction();

  const clickHandler = (id: number) => {
    if (data) {
      setCurrentID({ currentID: String(id + 2) });
      setCurrentData({ currentData: { ...data[id] } });
    }
  };

  const content = data
    ? data.map(({ name }, ind) => (
        <li key={name} css={l.item} onClick={() => clickHandler(ind)}>
          {name}
        </li>
      ))
    : null;

  return (
    <ul className="reset-list" data-testid="list" css={l.list}>
      {isLoading ? <Loader isLoading={isLoading} /> : content}
    </ul>
  );
};

export { List };
