// src/components/ClientLayout.tsx
"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Image from "next/image";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header className="header">
        <div className="header-inner">
          <button className="menu-button" onClick={() => setSidebarOpen(true)}>
            <span className="icon-svg" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
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

          {/* 가운데 로고 영역 */}
          <div className="center-logo">
            <span className="logo-svg" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
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

          <nav className="nav">
            <Link href="/posts">글 목록</Link>
            <a
              href="https://github.com/Aprasaks"
              target="_blank"
              className="github-icon"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16">
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path
                    stroke="#cad3f5"
                    d="M8.5 10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m0-6a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m3 3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-4-2v4m-1-6l-1-1m4 4l-1-1"
                    strokeWidth="1"
                  />
                  <path
                    stroke="#f5a97f"
                    d="m9.06 1.06l5.88 5.88a1.5 1.5 0 0 1 0 2.12l-5.88 5.88a1.5 1.5 0 0 1-2.12 0L1.06 9.06a1.5 1.5 0 0 1 0-2.12l5.88-5.88a1.5 1.5 0 0 1 2.12 0"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">© 2025. Created by Kanghyeok.</footer>
    </div>
  );
}
