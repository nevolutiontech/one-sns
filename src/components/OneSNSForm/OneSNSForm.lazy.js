import React, { lazy, Suspense } from 'react';

const LazyOneSNSForm = lazy(() => import('./index'));

const OneSNSForm = props => (
  <Suspense fallback={null}>
    <LazyOneSNSForm {...props} />
  </Suspense>
);

export default OneSNSForm;
