// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/Sidebar.css"; // ✅ src/styles에서 불러오기

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: Props) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ✖
      </button>
      <div className="profile">
        <Image src="/logo.png" alt="CodeNote Logo" width={60} height={60} />
        <h3>강혁 (CodeNote)</h3>
        <p>꾸준히 성장하는 개발자 🌱</p>
      </div>
      <nav className="menu">
        <Link href="/posts">📚 글 목록</Link>
        <Link href="/about">👤 소개</Link>
        <Link href="https://github.com/Aprasaks" target="_blank">
          🌐 GitHub
        </Link>
      </nav>
    </div>
  );
}
