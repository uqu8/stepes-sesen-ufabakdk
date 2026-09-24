import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import StepesLayout from './stepes/Layout/StepesLayout';
import routeConfig from './stepes/StepesRoutes';

const pages = {
  ...import.meta.glob('./stepes/page/*.tsx'),
  ...import.meta.glob('./stepes/page/*.jsx'),
};

const routes = routeConfig
  .filter(({ path }) => path !== '*')
  .map(({ name, path }) => {
    const importer =
      pages[`./stepes/page/${name}.tsx`] ?? pages[`./stepes/page/${name}.jsx`];

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

const NotFound = lazy(() => import('./stepes/page/Stepes404'));

export default function StepesRoutes() {
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
        <Route element={<StepesLayout />}>
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
