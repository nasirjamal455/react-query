
import React, { lazy, Suspense } from 'react';
function LazyLoading() {
    const MyComponent = lazy(() => import('./MyComponent'));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MyComponent />
        </Suspense>
    );
}

export default LazyLoading;
