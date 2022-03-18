import React, { FC } from 'react';
import * as l from './List.style';

const dataMock: { name: string; title: string }[] = [
  { name: 'Name1', title: 'Title' },
  { name: 'Name2', title: 'Title' },
  { name: 'Name3', title: 'Title' },
  { name: 'Name4', title: 'Title' },
  { name: 'Name5', title: 'Title' },
];

const List: FC = () => {
  return (
    <ul className="reset-list" css={l.list}>
      {dataMock.map(({ name, title }) => (
        <li key={name} css={l.item}>
          <a href="#d" css={l.link}>
            {name}
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export { List };
