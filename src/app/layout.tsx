// src/app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import ClientLayout from "../components/ClientLayout"; // ← 이거 꼭 확인!

export const metadata = {
  title: "CodeNote",
  description: "매일 성장하는 개발자 강혁의 블로그",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
