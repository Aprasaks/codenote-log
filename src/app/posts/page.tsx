// src/app/posts/page.tsx

import Link from "next/link";

export default function PostList() {
  // 현재는 수동 목록, 나중엔 자동으로 바꿔도 돼
  return (
    <section style={{ padding: "2rem", maxWidth: "720px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🗂 전체 글 목록</h1>

      <ul style={{ lineHeight: "2" }}>
        <li>
          <Link href="/posts/2025-04-18-daily-note">2025-04-18: 오늘의 학습 노트</Link>
        </li>
        {/* 이후 글이 생기면 여기에 추가 */}
      </ul>
    </section>
  );
}
