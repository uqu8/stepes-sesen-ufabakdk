import React, { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/sesen_header_wireframe"; // 导入 Header
import Footer from "../footer/sesen_footer_wireframe";
import "../css/SesenLayout.css";

export default function sesenLayout() {
  const location = useLocation();

  const hideFooterPaths = useMemo(
    () => [
      "/sesen/some-page-without-footer",
      // 在这里添加不需要显示 Footer 的页面路径
    ],
    []
  );

  const hideHeaderPaths = useMemo(
    () => [
      "/sesen/some-page-without-header",
      // 在这里添加不需要显示 Header 的页面路径
    ],
    []
  );

  const showFooter = !hideFooterPaths.includes(location.pathname);
  const showHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <div className="sesen-layout">
      {showHeader && <Header />}
      <main className="sesen-content">
        <Outlet />
      </main>
      {showFooter && <Footer />}
    </div>
  );
}
