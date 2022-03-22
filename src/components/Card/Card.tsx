import React, { FC } from 'react';
import { useAction } from '@src/hooks/useAction';
import { IStardbData } from '@src/interfaces';
import { Loader } from '@components/Loader';
import { getImage } from '@utils/getUrl.utils';
import { reportErrorUtils, getErrorMessageUtils } from '@src/utils';
import * as c from './Card.style';

interface ICard {
  isRandom?: boolean | undefined;
  data: IStardbData | null;
  isLoading: boolean;
}

const Card: FC<ICard> = ({ isRandom, data, isLoading }) => {
  const { setRandomError, setDataError } = useAction();

  const throwError = () => {
    throw new Error('Required');
  };

  const handleClick = () => {
    try {
      throwError();
    } catch (err) {
      const cb = isRandom ? setRandomError : setDataError;
      reportErrorUtils({
        message: getErrorMessageUtils(err),
        cb,
      });
    }
  };

  const btn = isRandom ? null : (
    <button onClick={handleClick} css={c.button}>
      Throw Error{' '}
    </button>
  );

  const message = isRandom ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
    <div>
      <p>Select item from list</p>
    </div>
  );

  let content = <>{message}</>;

  if (data) {
    const { type, id, ...currentData } = data;
    content = (
      <>
        <div css={c.imageWrap}>
          <img
            src={getImage(type, id)}
            alt="title"
            data-testid="cardImage"
            css={c.image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = 'https://via.placeholder.com/150';
            }}
          />
        </div>
        <div>
          <p css={c.title}>{data.name}</p>
          <ul className="reset-list" css={c.parametrs}>
            {Object.keys(currentData).map((key) => (
              <li css={c.item} key={key}>
                {key} {data[key]}
              </li>
            ))}
          </ul>
          {btn}
        </div>
      </>
    );
  }

  return (
    <div data-testid="card" css={c.card}>
      {isLoading ? <Loader isLoading={isLoading} /> : content}
    </div>
  );
};

export { Card };
