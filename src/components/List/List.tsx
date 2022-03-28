import React, { FC } from 'react';
import { IStardbData } from '@src/interfaces';
import { useAction } from '@src/hooks/useAction';
import { Loader } from '@components/Loader';
import { Link, useLocation } from 'react-router-dom';
import * as l from './List.style';

interface IList {
  data: IStardbData[] | null;
  isLoading: boolean;
  isHome?: boolean;
}

const List: FC<IList> = ({ data, isLoading, isHome = false }) => {
  const { setCurrentData, setCurrentID } = useAction();
  const { search } = useLocation();

  if (!data) return null;

  const [{ type }, ...currentArrayData] = data;
  const path = (ind: number) =>
    isHome ? `/details/${ind}` : `/${type}/${ind}`;
  const clickHandler = (id: number) => {
    if (data) {
      setCurrentID({ currentID: String(id + 1) });
      setCurrentData({ currentData: { ...data[id] } });
    }
  };

  const content = currentArrayData
    ? currentArrayData.map(({ name }, ind) => (
        <li key={name} onClick={() => clickHandler(ind)}>
          <Link
            css={l.item}
            to={{
              pathname: path(ind),
              search: `${search}`,
            }}
          >
            {name}
          </Link>
        </li>
      ))
    : null;

  return (
    <ul
      className="reset-list"
      data-testid="list"
      css={!isHome ? l.list : l.listHome}
    >
      {isLoading ? <Loader isLoading={isLoading} /> : content}
    </ul>
  );
};

export { List };
