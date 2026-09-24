import React, { useState, useEffect } from "react";

export default function Sesen404() {
  const [consoleErrors, setConsoleErrors] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    // 保存原始的 console.error 方法
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    // 存储错误信息
    const errors = [];

    // 重写 console.error
    console.error = function (...args) {
      // 调用原始方法
      originalConsoleError.apply(console, args);

      // 格式化错误信息
      const errorMessage = args
        .map((arg) => {
          if (arg instanceof Error) {
            return `${arg.name}: ${arg.message}`;
          }
          if (typeof arg === "object" && arg !== null) {
            try {
              return JSON.stringify(arg);
            } catch {
              return String(arg);
            }
          }
          return String(arg);
        })
        .join(" ");

      // 提取关键信息
      let displayMessage = errorMessage;

      // 检测是否是网络错误
      if (errorMessage.includes("ERR_BLOCKED_BY_RESPONSE")) {
        displayMessage =
          "Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin";
      } else if (errorMessage.includes("404")) {
        displayMessage =
          "GET " + errorMessage.match(/https?:\/\/[^\s]+/)?.[0] ||
          "resource" + " 404 (Not Found)";
      } else if (
        errorMessage.includes("TypeError") ||
        errorMessage.includes("ReferenceError")
      ) {
        displayMessage = errorMessage;
      }

      const errorObj = {
        message: displayMessage,
        timestamp: new Date().toLocaleTimeString(),
        type: "error",
      };

      errors.push(errorObj);

      // 更新状态，显示最新的10条错误
      const latestErrors = errors.slice(-10);
      setConsoleErrors(latestErrors);
      setErrorCount(errors.length);
    };

    // 也捕获警告信息
    console.warn = function (...args) {
      originalConsoleWarn.apply(console, args);

      const warnMessage = args
        .map((arg) => {
          if (arg instanceof Error) {
            return `${arg.name}: ${arg.message}`;
          }
          if (typeof arg === "object" && arg !== null) {
            try {
              return JSON.stringify(arg);
            } catch {
              return String(arg);
            }
          }
          return String(arg);
        })
        .join(" ");

      const warnObj = {
        message: warnMessage,
        timestamp: new Date().toLocaleTimeString(),
        type: "warn",
      };

      errors.push(warnObj);
      const latestErrors = errors.slice(-10);
      setConsoleErrors(latestErrors);
      setErrorCount(errors.length);
    };

    // 立即检查是否有已存在的错误
    // 尝试从window对象获取任何可能的错误信息
    const existingErrors = [];
    if (window.__error_log) {
      existingErrors.push(...window.__error_log);
    }

    // 模拟一些常见的控制台错误（演示用）
    // 实际使用时，这些会由真实的浏览器错误触发
    setTimeout(() => {
      // 模拟页面加载时可能出现的错误
      if (consoleErrors.length === 0) {
        // 只有当没有真实错误时才显示示例
        console.error(
          "Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin"
        );
      }
    }, 500);

    // 清理函数：恢复原始的 console 方法
    return () => {
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
    };
  }, []);

  return (
    <div className="sesen-404-page">
      <style>{`
        .sesen-404-page {
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(75, 111, 216, 0.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(75, 111, 216, 0.08),
              transparent 30%
            ),
            #f5f8ff;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          color: #171717;
        }

        .sesen-404-page *,
        .sesen-404-page *::before,
        .sesen-404-page *::after {
          box-sizing: border-box;
        }

        .sesen-404-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          pointer-events: none;
        }

        .sesen-404-glow-left {
          left: -220px;
          top: 10%;
          background: rgba(75, 111, 216, 0.20);
        }

        .sesen-404-glow-right {
          right: -220px;
          bottom: 5%;
          background: rgba(75, 111, 216, 0.15);
        }

        .sesen-404-content {
          width: min(900px, calc(100% - 40px));
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 80px 30px;
        }

        .sesen-404-brand {
          margin-bottom: 48px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8a9bc8;
        }

        .sesen-404-number {
          margin: 0;
          font-size: clamp(130px, 20vw, 240px);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 800;
          background: linear-gradient(
            135deg,
            #1a2a5e 15%,
            #4B6FD8 55%,
            #7b9af0 95%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .sesen-404-title {
          margin: 42px 0 18px;
          font-size: clamp(30px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 750;
          color: #1a2a5e;
        }

        .sesen-404-description {
          max-width: 650px;
          margin: 0 auto;
          color: #5a6a8e;
          font-size: 17px;
          line-height: 1.75;
        }

        /* Console 风格的错误信息 */
        .sesen-404-error-container {
          max-width: 720px;
          margin: 32px auto 0;
          border-radius: 12px;
          background: #1e1e1e;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            monospace;
          font-size: 13px;
          line-height: 1.6;
          color: #d4d4d4;
          word-break: break-word;
          text-align: left;
          overflow: hidden;
          border: 1px solid #333;
        }

        .sesen-404-error-header {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: #2d2d2d;
          border-bottom: 1px solid #3d3d3d;
          font-size: 12px;
          color: #858585;
          cursor: default;
        }

        .sesen-404-error-dots {
          display: flex;
          gap: 6px;
          margin-right: 12px;
        }

        .sesen-404-error-dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .sesen-404-error-dot-red {
          background: #f44336;
        }

        .sesen-404-error-dot-yellow {
          background: #ff9800;
        }

        .sesen-404-error-dot-green {
          background: #4caf50;
        }

        .sesen-404-error-title {
          font-weight: 500;
          color: #aaa;
        }

        .sesen-404-error-badge {
          margin-left: auto;
          padding: 2px 12px;
          background: #3d3d3d;
          border-radius: 12px;
          font-size: 11px;
          color: #aaa;
        }

        .sesen-404-error-badge.error {
          background: #5c2a2a;
          color: #ff6b6b;
        }

        .sesen-404-error-body {
          padding: 8px 16px;
          max-height: 220px;
          overflow-y: auto;
          background: #1e1e1e;
        }

        .sesen-404-error-body::-webkit-scrollbar {
          width: 8px;
        }

        .sesen-404-error-body::-webkit-scrollbar-track {
          background: #1e1e1e;
        }

        .sesen-404-error-body::-webkit-scrollbar-thumb {
          background: #3d3d3d;
          border-radius: 4px;
        }

        .sesen-404-error-body::-webkit-scrollbar-thumb:hover {
          background: #4d4d4d;
        }

        .sesen-404-error-item {
          padding: 6px 0;
          border-bottom: 1px solid #2a2a2a;
          font-size: 12px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .sesen-404-error-item:last-child {
          border-bottom: none;
        }

        .sesen-404-error-icon {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .sesen-404-error-icon.error {
          color: #f44336;
        }

        .sesen-404-error-icon.warn {
          color: #ffa726;
        }

        .sesen-404-error-content {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 4px 8px;
        }

        .sesen-404-error-message {
          color: #d4d4d4;
          word-break: break-all;
        }

        .sesen-404-error-message .highlight {
          color: #ff6b6b;
          font-weight: 500;
        }

        .sesen-404-error-timestamp {
          color: #6a6a6a;
          font-size: 10px;
          flex-shrink: 0;
        }

        .sesen-404-error-empty {
          color: #6a6a6a;
          font-style: italic;
          padding: 16px 0;
          text-align: center;
          font-size: 13px;
        }

        .sesen-404-error-empty .console-icon {
          display: block;
          font-size: 24px;
          margin-bottom: 8px;
        }

        /* 保留原有样式 */
        .sesen-404-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .sesen-404-button {
          appearance: none;
          border: 0;
          text-decoration: none;
          cursor: pointer;
          min-width: 150px;
          padding: 15px 25px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        .sesen-404-button:hover {
          transform: translateY(-2px);
        }

        .sesen-404-primary {
          color: #fff;
          background: #4B6FD8;
          box-shadow: 0 10px 25px rgba(75, 111, 216, 0.30);
        }

        .sesen-404-primary:hover {
          background: #3a5abf;
          box-shadow: 0 14px 30px rgba(75, 111, 216, 0.38);
        }

        .sesen-404-secondary {
          color: #1a2a5e;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #c8d4ed;
        }

        .sesen-404-secondary:hover {
          background: #fff;
          box-shadow: 0 10px 25px rgba(75, 111, 216, 0.10);
        }

        .sesen-404-footer {
          margin-top: 58px;
          color: #8a9bc8;
          font-size: 12px;
        }

        @media (max-width: 640px) {
          .sesen-404-content {
            padding: 60px 20px;
          }

          .sesen-404-brand {
            margin-bottom: 35px;
          }

          .sesen-404-title {
            margin-top: 30px;
          }

          .sesen-404-description {
            font-size: 15px;
          }

          .sesen-404-error-container {
            font-size: 11px;
          }

          .sesen-404-error-body {
            max-height: 160px;
            padding: 6px 12px;
          }

          .sesen-404-error-item {
            font-size: 11px;
            padding: 4px 0;
          }

          .sesen-404-button {
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>

      <div className="sesen-404-glow sesen-404-glow-left" />
      <div className="sesen-404-glow sesen-404-glow-right" />

      <main className="sesen-404-content">
        <div className="sesen-404-brand">Global Language Platform</div>

        <h1 className="sesen-404-number">404</h1>

        <h2 className="sesen-404-title">Page Not Found</h2>

        <p className="sesen-404-description">
          Sorry, the page you're looking for could not be loaded. The resource
          may have been moved, removed, or is currently unavailable.
        </p>

        {/* Console 风格的错误信息显示 */}
        <div className="sesen-404-error-container">
          <div className="sesen-404-error-header">
            <div className="sesen-404-error-dots">
              <span className="sesen-404-error-dot sesen-404-error-dot-red"></span>
              <span className="sesen-404-error-dot sesen-404-error-dot-yellow"></span>
              <span className="sesen-404-error-dot sesen-404-error-dot-green"></span>
            </div>
            <span className="sesen-404-error-title">Console</span>
            <span
              className={`sesen-404-error-badge ${
                errorCount > 0 ? "error" : ""
              }`}
            >
              {errorCount > 0
                ? `${errorCount} error${errorCount > 1 ? "s" : ""}`
                : "No errors"}
            </span>
          </div>
          <div className="sesen-404-error-body">
            {consoleErrors.length === 0 ? (
              <div className="sesen-404-error-empty">
                <span className="console-icon">✓</span>
                No console errors detected
              </div>
            ) : (
              consoleErrors.map((error, index) => (
                <div key={index} className="sesen-404-error-item">
                  <span className={`sesen-404-error-icon ${error.type}`}>
                    {error.type === "error" ? "✖" : "⚠"}
                  </span>
                  <div className="sesen-404-error-content">
                    <span className="sesen-404-error-message">
                      {error.message}
                    </span>
                    <span className="sesen-404-error-timestamp">
                      {error.timestamp}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="sesen-404-actions">
          <a href="/sesen/" className="sesen-404-button sesen-404-primary">
            Back to Home
          </a>

          <button
            type="button"
            className="sesen-404-button sesen-404-secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

        <div className="sesen-404-footer">
          Sesen · One Language. Infinite Possibilities.
        </div>
      </main>
    </div>
  );
}
