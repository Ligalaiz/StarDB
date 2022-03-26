import React, { FC, useEffect } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as t from './useTemplate.style';

interface ITemplate {
  path: string;
}

interface IfieldsMap {
  people: string[];
  starships: string[];
  planets: string[];
  [key: string]: string[];
}

const fieldsMap: IfieldsMap = {
  people: ['name', 'gender', 'eye_color'],
  starships: ['model', 'craft_class', 'lenght', 'cost'],
  planets: ['name', 'pupulation', 'rotation_period'],
};

const Template: FC<ITemplate> = ({ path }) => {
  const { data, currentData, currentID, loadingData } = useTypedUseSelector(
    (state) => state.data,
  );
  const { dataRequest } = useAction();

  let currentTarget: { [key: string]: string } | null = null;

  if (currentData) {
    const fieldsRequired = fieldsMap[`${path}`];
    currentTarget = {};

    fieldsRequired.forEach((field) => {
      currentTarget![`${field}`] = currentData[`${field}`];
    });

    currentTarget = {
      ...currentTarget,
      id: currentID,
      type: `${path === 'people' ? 'characters' : path}`,
    };
  }

  useEffect(() => {
    dataRequest(`${path}/`);
  }, [dataRequest, path]);

  return (
    <div css={t.peopleWrap} data-testid="peoplePage">
      <div css={t.itemWrap}>
        <List data={data} isLoading={loadingData} />
      </div>
      <div css={t.itemWrap}>
        <Card data={currentTarget} isLoading={loadingData} />
      </div>
    </div>
  );
};

export { Template };
