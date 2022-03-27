import { Template } from '@src/hooks/useTemplate';
import { errorBoundary } from '@src/HOC/errorBoundary';
import React, { FC } from 'react';

const TemplateWithErrorBoundary = errorBoundary(Template);

const PlanetsPage: FC = () => {
  return <TemplateWithErrorBoundary path="planets" />;
};

export { PlanetsPage };
