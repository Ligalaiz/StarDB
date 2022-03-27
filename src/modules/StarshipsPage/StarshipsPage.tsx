import React, { FC } from 'react';
import { Template } from '@src/hooks/useTemplate';
import { errorBoundary } from '@src/HOC/errorBoundary';

const TemplateWithErrorBoundary = errorBoundary(Template);

const StarshipsPage: FC = () => {
  return <TemplateWithErrorBoundary path="starships" />;
};

export { StarshipsPage };
