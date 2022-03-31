import React, { FC, useEffect } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { useParams } from 'react-router-dom';
import { View } from '@components/Views/Views';
import { getLocalDataUtils } from '@src/utils';
import { fieldsMap } from '@components/Views/fieldsMap';
import * as t from './useTemplate.style';

interface ITemplate {
  path: string;
  isHome?: boolean;
  isDetails?: boolean;
}

const Template: FC<ITemplate> = ({
  path,
  isHome = false,
  isDetails = false,
}) => {
  const { data, currentData, currentID, sourceData } = useTypedUseSelector(
    (state) => state.data,
  );
  const { dataRequest, setCurrentData, setCurrentID, setSource } = useAction();
  const { id } = useParams();
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
    if (sourceData === 'local') {
      setSource({ data: getLocalDataUtils(`${path}`) });
    } else {
      dataRequest(`${path}/`);
    }
  }, [dataRequest, path, setSource, sourceData]);

  useEffect(() => {
    if (data && id) {
      setCurrentID({ currentID: String(Number(id) + 1) });
      setCurrentData({ currentData: { ...data[id] } });
    }
  }, [data, id, path, setCurrentData, setCurrentID]);

  let testAttribute = path;

  if (isHome) {
    testAttribute = 'home';
  } else if (isDetails) {
    testAttribute = 'details';
  }

  return (
    <div css={t.peopleWrap} data-testid={`${testAttribute}Page`}>
      <View
        path={path}
        isDetails={isDetails}
        currentTarget={currentTarget}
        isHome={isHome}
      />
    </div>
  );
};

export { Template };
