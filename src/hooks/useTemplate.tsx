import React, { FC, useEffect } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { errorBoundary } from '@src/HOC/errorBoundary';
import { useParams, useNavigate } from 'react-router-dom';
import { List } from '@components/List';
import { Card } from '@components/Card';
import * as t from './useTemplate.style';
import { getLocalDataUtils } from '@src/utils';

interface ITemplate {
  path: string;
  isHome?: boolean;
  isDetails?: boolean;
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

const ListWithErrorBoundary = errorBoundary(List);
const CardWithErrorBoundary = errorBoundary(Card);

const Template: FC<ITemplate> = ({
  path,
  isHome = false,
  isDetails = false,
}) => {
  const { data, currentData, currentID, loadingData, sourceData } =
    useTypedUseSelector((state) => state.data);
  const { dataRequest, setCurrentData, setCurrentID, setSource } = useAction();
  const navigate = useNavigate();
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

  let currentArrayData = data;

  if (data) {
    currentArrayData = [{ type: path }, ...data];
  }

  const regularView = (
    <>
      <div css={t.itemWrap}>
        <ListWithErrorBoundary
          data={currentArrayData}
          isLoading={loadingData}
        />
      </div>

      <div css={t.itemWrap}>
        <CardWithErrorBoundary data={currentTarget} isLoading={loadingData} />
      </div>
    </>
  );

  const detailsView = (
    <>
      <div css={t.itemWrapDetails}>
        <CardWithErrorBoundary data={currentTarget} isLoading={loadingData} />
      </div>
      <div css={t.itemWrapDetails}>
        <button
          css={t.btn}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </>
  );

  const homeView = (
    <div css={t.itemWrapHome}>
      <ListWithErrorBoundary
        data={currentArrayData}
        isLoading={loadingData}
        isHome
      />
    </div>
  );

  let currentView = regularView;

  if (isDetails) {
    currentView = detailsView;
  } else if (isHome) {
    currentView = homeView;
  }

  let testAttribute = path;

  if (isHome) {
    testAttribute = 'home';
  } else if (isDetails) {
    testAttribute = 'details';
  }

  return (
    <div css={t.peopleWrap} data-testid={`${testAttribute}Page`}>
      {currentView}
    </div>
  );
};

export { Template };
