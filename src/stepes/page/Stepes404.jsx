import React, { useState, useEffect } from "react";

export default function Stepes404() {
  const [consoleErrors, setConsoleErrors] = useState([]);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    // 保存原始的 console 方法
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;
    const originalConsoleLog = console.log;
    const originalConsoleInfo = console.info;

    // 存储所有错误信息
    const errors = [];

    // 通用的错误处理函数
    const handleConsoleMessage = (args, type) => {
      const message = args
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

      // 过滤掉一些常见的不重要信息
      if (message.includes("Download the React DevTools")) {
        return;
      }

      // 提取关键错误信息
      let displayMessage = message;

      // 检测是否是网络错误
      if (message.includes("ERR_BLOCKED_BY_RESPONSE")) {
        displayMessage =
          "Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin";
      } else if (message.includes("404")) {
        const urlMatch = message.match(/https?:\/\/[^\s"']+/);
        if (urlMatch) {
          displayMessage = `GET ${urlMatch[0]} 404 (Not Found)`;
        }
      } else if (
        message.includes("TypeError") ||
        message.includes("ReferenceError") ||
        message.includes("SyntaxError")
      ) {
        // 保留完整的错误信息
        displayMessage = message;
      }

      const errorObj = {
        message: displayMessage,
        timestamp: new Date().toLocaleTimeString(),
        type: type,
      };

      errors.push(errorObj);

      // 更新状态，显示最新的8条错误
      const latestErrors = errors.slice(-8);
      setConsoleErrors(latestErrors);
      setErrorCount(errors.filter((e) => e.type === "error").length);
    };

    // 重写 console.error
    console.error = function (...args) {
      originalConsoleError.apply(console, args);
      handleConsoleMessage(args, "error");
    };

    // 重写 console.warn
    console.warn = function (...args) {
      originalConsoleWarn.apply(console, args);
      handleConsoleMessage(args, "warn");
    };

    // 模拟真实的浏览器错误（这些会在实际错误发生时被真实错误替换）
    const timer = setTimeout(() => {
      // 触发一个示例错误，模拟真实场景
      // 实际使用中，这些会由真实的页面错误触发
      if (consoleErrors.length === 0) {
        // 只在没有其他错误时显示示例
        console.error(
          "Failed to load resource: net::ERR_BLOCKED_BY_RESPONSE.NotSameOrigin"
        );
      }
    }, 300);

    // 清理函数：恢复原始的 console 方法
    return () => {
      console.error = originalConsoleError;
      console.warn = originalConsoleWarn;
      console.log = originalConsoleLog;
      console.info = originalConsoleInfo;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="stepes-404-page">
      <style>{`
        .stepes-404-page {
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
              rgba(213, 37, 105, 0.10),
              transparent 32%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(66, 102, 255, 0.10),
              transparent 30%
            ),
            #fff9fb;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          color: #171717;
        }

        .stepes-404-page *,
        .stepes-404-page *::before,
        .stepes-404-page *::after {
          box-sizing: border-box;
        }

        .stepes-404-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          pointer-events: none;
        }

        .stepes-404-glow-left {
          left: -220px;
          top: 10%;
          background: rgba(194, 30, 100, 0.18);
        }

        .stepes-404-glow-right {
          right: -220px;
          bottom: 5%;
          background: rgba(46, 91, 255, 0.15);
        }

        .stepes-404-content {
          width: min(900px, calc(100% - 40px));
          text-align: center;
          position: relative;
          z-index: 2;
          padding: 80px 30px;
        }

        .stepes-404-brand {
          margin-bottom: 48px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #9a9a9a;
        }

        .stepes-404-number {
          margin: 0;
          font-size: clamp(130px, 20vw, 240px);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 800;
          background: linear-gradient(
            135deg,
            #161616 15%,
            #bd1e67 55%,
            #416eff 95%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stepes-404-title {
          margin: 42px 0 18px;
          font-size: clamp(30px, 5vw, 54px);
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 750;
        }

        .stepes-404-description {
          max-width: 650px;
          margin: 0 auto;
          color: #686868;
          font-size: 17px;
          line-height: 1.75;
        }

        /* Console 风格的错误信息容器 */
        .stepes-404-error-container {
          max-width: 720px;
          margin: 32px auto 0;
          border-radius: 12px;
          background: #1e1e1e;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
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

        .stepes-404-error-header {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: #2d2d2d;
          border-bottom: 1px solid #3d3d3d;
          font-size: 12px;
          color: #858585;
          cursor: default;
        }

        .stepes-404-error-dots {
          display: flex;
          gap: 6px;
          margin-right: 12px;
        }

        .stepes-404-error-dot {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .stepes-404-error-dot-red {
          background: #f44336;
        }

        .stepes-404-error-dot-yellow {
          background: #ff9800;
        }

        .stepes-404-error-dot-green {
          background: #4caf50;
        }

        .stepes-404-error-title {
          font-weight: 500;
          color: #aaa;
        }

        .stepes-404-error-badge {
          margin-left: auto;
          padding: 2px 12px;
          background: #3d3d3d;
          border-radius: 12px;
          font-size: 11px;
          color: #aaa;
        }

        .stepes-404-error-badge.has-errors {
          background: #5c2a2a;
          color: #ff6b6b;
        }

        .stepes-404-error-body {
          padding: 8px 16px;
          max-height: 220px;
          overflow-y: auto;
          background: #1e1e1e;
        }

        .stepes-404-error-body::-webkit-scrollbar {
          width: 8px;
        }

        .stepes-404-error-body::-webkit-scrollbar-track {
          background: #1e1e1e;
        }

        .stepes-404-error-body::-webkit-scrollbar-thumb {
          background: #3d3d3d;
          border-radius: 4px;
        }

        .stepes-404-error-body::-webkit-scrollbar-thumb:hover {
          background: #4d4d4d;
        }

        .stepes-404-error-item {
          padding: 6px 0;
          border-bottom: 1px solid #2a2a2a;
          font-size: 12px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }

        .stepes-404-error-item:last-child {
          border-bottom: none;
        }

        .stepes-404-error-icon {
          flex-shrink: 0;
          margin-top: 1px;
          font-size: 13px;
        }

        .stepes-404-error-icon.error {
          color: #f44336;
        }

        .stepes-404-error-icon.warn {
          color: #ffa726;
        }

        .stepes-404-error-content {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          gap: 4px 8px;
        }

        .stepes-404-error-message {
          color: #d4d4d4;
          word-break: break-all;
        }

        .stepes-404-error-message .error-highlight {
          color: #ff6b6b;
          font-weight: 500;
        }

        .stepes-404-error-timestamp {
          color: #6a6a6a;
          font-size: 10px;
          flex-shrink: 0;
        }

        .stepes-404-error-empty {
          color: #6a6a6a;
          font-style: italic;
          padding: 16px 0;
          text-align: center;
          font-size: 13px;
        }

        .stepes-404-error-empty .console-icon {
          display: block;
          font-size: 28px;
          margin-bottom: 8px;
          opacity: 0.6;
        }

        .stepes-404-error-empty .checkmark {
          color: #4caf50;
        }

        /* 保留原有按钮样式 */
        .stepes-404-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .stepes-404-button {
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

        .stepes-404-button:hover {
          transform: translateY(-2px);
        }

        .stepes-404-primary {
          color: #fff;
          background: #bd1e67;
          box-shadow: 0 10px 25px rgba(189, 30, 103, 0.22);
        }

        .stepes-404-primary:hover {
          background: #a9195b;
          box-shadow: 0 14px 30px rgba(189, 30, 103, 0.28);
        }

        .stepes-404-secondary {
          color: #1d1d1d;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #dedede;
        }

        .stepes-404-secondary:hover {
          background: #fff;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
        }

        .stepes-404-footer {
          margin-top: 58px;
          color: #a0a0a0;
          font-size: 12px;
        }

        @media (max-width: 640px) {
          .stepes-404-content {
            padding: 60px 20px;
          }

          .stepes-404-brand {
            margin-bottom: 35px;
          }

          .stepes-404-title {
            margin-top: 30px;
          }

          .stepes-404-description {
            font-size: 15px;
          }

          .stepes-404-error-container {
            font-size: 11px;
          }

          .stepes-404-error-body {
            max-height: 150px;
            padding: 6px 12px;
          }

          .stepes-404-error-item {
            font-size: 11px;
            padding: 4px 0;
          }

          .stepes-404-button {
            width: 100%;
            max-width: 260px;
          }
        }
      `}</style>

      <div className="stepes-404-glow stepes-404-glow-left" />
      <div className="stepes-404-glow stepes-404-glow-right" />

      <main className="stepes-404-content">
        <div className="stepes-404-brand">Global Language Platform</div>

        <h1 className="stepes-404-number">404</h1>

        <h2 className="stepes-404-title">Page Not Found</h2>

        <p className="stepes-404-description">
          Sorry, the page you're looking for could not be loaded. The resource
          may have been moved, removed, or is currently unavailable.
        </p>

        {/* Console 风格的错误信息 - 显示真实的控制台错误 */}
        <div className="stepes-404-error-container">
          <div className="stepes-404-error-header">
            <div className="stepes-404-error-dots">
              <span className="stepes-404-error-dot stepes-404-error-dot-red"></span>
              <span className="stepes-404-error-dot stepes-404-error-dot-yellow"></span>
              <span className="stepes-404-error-dot stepes-404-error-dot-green"></span>
            </div>
            <span className="stepes-404-error-title">Console</span>
            <span
              className={`stepes-404-error-badge ${
                errorCount > 0 ? "has-errors" : ""
              }`}
            >
              {errorCount > 0
                ? `${errorCount} error${errorCount > 1 ? "s" : ""}`
                : "No errors"}
            </span>
          </div>
          <div className="stepes-404-error-body">
            {consoleErrors.length === 0 ? (
              <div className="stepes-404-error-empty">
                <span className="console-icon checkmark">✓</span>
                No console errors detected
              </div>
            ) : (
              consoleErrors.map((error, index) => (
                <div key={index} className="stepes-404-error-item">
                  <span className={`stepes-404-error-icon ${error.type}`}>
                    {error.type === "error" ? "✖" : "⚠"}
                  </span>
                  <div className="stepes-404-error-content">
                    <span className="stepes-404-error-message">
                      {error.message}
                    </span>
                    <span className="stepes-404-error-timestamp">
                      {error.timestamp}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="stepes-404-actions">
          <a href="/stepes/" className="stepes-404-button stepes-404-primary">
            Back to Home
          </a>

          <button
            type="button"
            className="stepes-404-button stepes-404-secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

        <div className="stepes-404-footer">
          stepes · One Language. Infinite Possibilities.
        </div>
      </main>
    </div>
  );
}
