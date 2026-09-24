import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../footer/stepes_footer_wireframe";
import Header from "../header/stepes_header_wireframe"; // 导入 Header
import "../css/StepesLayout.css";

export default function StepesLayout() {
  const location = useLocation();

  const hideFooterPaths = useMemo(
    () => [
      "/stepes/some-page-without-footer",
      // 在这里添加不需要显示 Footer 的页面路径
    ],
    []
  );

  const hideHeaderPaths = useMemo(
    () => [
      "/stepes/some-page-without-header",
      // 在这里添加不需要显示 Header 的页面路径
    ],
    []
  );

  const showFooter = !hideFooterPaths.includes(location.pathname);
  const showHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div className="stepes-layout">
      {showHeader && <Header />}
      <main className="stepes-content">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
