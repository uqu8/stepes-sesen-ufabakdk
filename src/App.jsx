import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GatewayPage from "./GatewayPage";
import SesenRoutes from "./SesenRoutes";
import StepesRoutes from "./StepesRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 根路径 - 入口页面 */}
        <Route path="/" element={<GatewayPage />} />
        
        {/* Sesen 路由 - 所有 /sesen/* 路径 */}
        <Route path="/sesen/*" element={<SesenRoutes />} />
        
        {/* Stepes 路由 - 所有 /stepes/* 路径 */}
        <Route path="/stepes/*" element={<StepesRoutes />} />
        
        {/* 任何未匹配的路径都重定向到首页 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}