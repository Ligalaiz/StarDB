import React, { FC } from 'react';
import { errorBoundary } from '@src/HOC/errorBoundary';
import { Template } from '@src/hooks/useTemplate';

const TemplateWithErrorBoundary = errorBoundary(Template);

const DetailsPage: FC = () => {
  return <TemplateWithErrorBoundary path="people" isDetails />;
};

export { DetailsPage };
