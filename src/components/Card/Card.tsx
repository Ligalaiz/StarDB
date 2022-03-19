import React, { FC } from 'react';
import * as c from './Card.style';

const dataMock: {
  [key: string]: string;
} = { title: 'Title1', population: 'Population' };

const Card: FC<{ isRandom?: boolean | undefined }> = ({ isRandom }) => {
  const throwError = () => {
    throw new Error('Required');
  };

  const handleClick = () => {
    try {
      throwError();
    } catch (e) {
      console.log(e.message);
    }
  };
  const btn = isRandom ? (
    <button onClick={handleClick} css={c.button}>
      Throw Error{' '}
    </button>
  ) : null;

  return (
    <div data-testid="card" css={c.card}>
      {!dataMock && isRandom ? (
        <div>
          <p>Select item from list</p>
        </div>
      ) : (
        <>
          <div css={c.imageWrap}>
            <img
              src="https://via.placeholder.com/150"
              alt="title"
              data-testid="cardImage"
              css={c.image}
            />
          </div>
          <div>
            <p css={c.title}>{dataMock.title}</p>
            <ul className="reset-list" css={c.parametrs}>
              {Object.keys(dataMock).map((key) => (
                <li css={c.item} key={key}>
                  {key} {dataMock.key}
                </li>
              ))}
            </ul>
            {btn}
          </div>
        </>
      )}
    </div>
  );
};

export { Card };
