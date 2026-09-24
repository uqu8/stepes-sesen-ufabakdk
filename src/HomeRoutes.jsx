import { Routes, Route, Navigate } from "react-router-dom";
import GatewayPage from "./stepes/page/GatewayPage";

export default function HomeRoutes() {
  return (
    <Routes>
      {/* 根路径显示入口页面 */}
      <Route path="/" element={<GatewayPage />} />
      
      {/* 其他路径重定向到入口页面 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}