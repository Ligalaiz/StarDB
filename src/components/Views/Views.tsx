import { List } from '@src/components/List';
import { errorBoundary } from '@src/HOC/errorBoundary';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useNavigate } from 'react-router-dom';
import { Card } from '@components/Card';
import * as t from '../../hooks/useTemplate.style';
import React, { FC } from 'react';

interface ITemplate {
  path: string;
  isHome: boolean;
  isDetails: boolean;
  currentTarget: { [key: string]: string } | null;
}

const ListWithErrorBoundary = errorBoundary(List);
const CardWithErrorBoundary = errorBoundary(Card);

const View: FC<ITemplate> = ({ path, isHome, isDetails, currentTarget }) => {
  const { data, loadingData } = useTypedUseSelector((state) => state.data);
  const navigate = useNavigate();

  let currentArrayData = data;
  if (data) currentArrayData = [{ type: path }, ...data];

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

  return <>{currentView}</>;
};

export { View };
