"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <div className="layout">
      {/* 사이드바 */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onMouseLeave={() => setSidebarOpen(false)}
      />

      {/* 상단 헤더 */}
      <header className="header">
        <div className="header-inner">
          {/* 메뉴 버튼 */}
          <button className="menu-button" onMouseEnter={() => setSidebarOpen(true)}>
            <span className="icon-svg" aria-hidden="true">
              {/* 사이드바 아이콘 */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="#8aadf4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M5.5 7.5v2m10-.5V7m-5 .5v2M.5 9V7m8-3.5v-2H6.52m-4.02 2h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1"
                />
              </svg>
            </span>
          </button>

          {/* 중앙 로고 */}
          <div className="center-logo">
            <span className="logo-svg" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="#9ca7ff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M14.456 11.367c-1.428 2.76-2.57 4.133-3.612 4.133q-.729-.001-1.427-.446a2.18 2.18 0 0 0-2.246-.047c-.562.325-1.1.493-1.608.493C4.03 15.5 1.5 10.95 1.5 8.45c0-2.664 1.45-4.898 3.656-4.898c1.038 0 1.934.648 2.687.945c.32.128.68.119.991-.025c.61-.283 1.416-.92 2.416-.92c1.222 0 2.284.786 3.168 1.923a.383.383 0 0 1-.08.548c-.988.714-1.463 1.516-1.463 2.428c0 .913.475 1.714 1.463 2.428a.38.38 0 0 1 .118.488M8.5 3S8.347 1.394 10 1"
                />
              </svg>
            </span>
            <span className="logo-text">CodeNote</span>
          </div>

          {/* 우측 아이콘 */}
          <nav className="nav">
            {/* 🔍 검색 아이콘 */}
            <button className="search-button" onClick={() => setSearchOpen((prev) => !prev)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                <path
                  fill="none"
                  stroke="#cad3f5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.5 6.5a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6a6 6 0 0 1 6 6m3 9L11 11"
                  strokeWidth="1.6"
                />
              </svg>
            </button>

            <a
              href="https://github.com/Aprasaks"
              target="_blank"
              className="github-icon"
              aria-label="GitHub"
            >
              {/* GitHub 아이콘 */}
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path
                    stroke="#cad3f5"
                    d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"
                    strokeWidth="1.6"
                  />
                  <path
                    stroke="#8087a2"
                    d="M10 14.907c-1.5.5-1.25-.657-2-.907m5 1.5v-1.062c0-.447-.238-.67-.5-.938c1.225-.134 2.5-.58 2.5-2.633c0-.534-.205-.965-.569-1.348a1.9 1.9 0 0 0-.043-1.428s-.482-.134-1.532.58a5.3 5.3 0 0 0-2.712 0c-1.05-.714-1.531-.58-1.531-.58a1.9 1.9 0 0 0-.044 1.428c-.364.383-.568.814-.569 1.348c0 2.053 1.275 2.5 2.5 2.633c-.262.268-.544.58-.5.938V15.5"
                    strokeWidth="1.6"
                  />
                </g>
              </svg>
            </a>
          </nav>
        </div>
      </header>

      {/* 🔍 검색창 오버레이 */}
      {isSearchOpen && (
        <div className="search-popup">
          <div className="search-input-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.5 6.5a6 6 0 1 1-6-6a6 6 0 0 1 6 6m3 9L11 11"
                stroke="#cad3f5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="포스트를 검색해보세요"
              className="search-input"
              autoFocus
            />
          </div>
        </div>
      )}

      <main>{children}</main>
      <footer className="footer">© 2025. Created by Kanghyeok.</footer>
    </div>
  );
}
