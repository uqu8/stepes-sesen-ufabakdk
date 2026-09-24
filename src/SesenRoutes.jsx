import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import SesenLayout from './sesen/Layout/SesenLayout';
import routeConfig from './sesen/SesenRoutes';

const pages = {
  ...import.meta.glob('./sesen/page/*.tsx'),
  ...import.meta.glob('./sesen/page/*.jsx'),
};

const routes = routeConfig
  .filter(({ path }) => path !== '*')
  .map(({ name, path }) => {
    const importer =
      pages[`./sesen/page/${name}.tsx`] ?? pages[`./sesen/page/${name}.jsx`];

    if (!importer) {
      console.warn(`找不到页面：${name}`);
      return null;
    }

    return {
      path,
      Component: lazy(importer), // ← 删掉了 as any
    };
  })
  .filter(Boolean);

const NotFound = lazy(() => import('./sesen/page/Sesen404'));

export default function SesenRoutes() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Loading...
        </div>
      }
    >
      <Routes>
        {/* 正常页面：使用 Header + Footer */}
        <Route element={<SesenLayout />}>
          {routes.map(
            (
              route // ← 删掉了 : any
            ) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.Component />}
              />
            )
          )}
        </Route>

        {/* 404：完全独立，不使用 Header / Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
