import React, { lazy, Suspense } from 'react';

const LazyOneSNSShare = lazy(() => import('./index'));

const OneSNSShare = props => (
  <Suspense fallback={null}>
    <LazyOneSNSShare {...props} />
  </Suspense>
);

export default OneSNSShare;
