import React, { FC, useEffect } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as p from './PeoplePage.style';

const ExportPeoplePage: FC = () => {
  const { data, currentData, currentID, loadingData } = useTypedUseSelector(
    (state) => state.data,
  );
  const { dataRequest } = useAction();

  let currentTarget = null;

  if (currentData) {
    const { name, gender, eye_color } = currentData;
    currentTarget = {
      name,
      gender,
      eye_color,
      id: currentID,
      type: 'characters',
    };
  }

  useEffect(() => {
    dataRequest(`people/`);
  }, []);

  return (
    <div css={p.peopleWrap} data-testid="peoplePage">
      <div css={p.itemWrap}>
        <List data={data} isLoading={loadingData} />
      </div>
      <div css={p.itemWrap}>
        <Card data={currentTarget} isLoading={loadingData} />
      </div>
    </div>
  );
};

export { ExportPeoplePage };
