import React, { FC } from 'react';
import { Template } from '@src/hooks/useTemplate';
import { errorBoundary } from '@src/HOC/errorBoundary';

const TemplateWithErrorBoundary = errorBoundary(Template);

const PeoplePage: FC = () => {
  return <TemplateWithErrorBoundary path="people" />;
};

export { PeoplePage };
