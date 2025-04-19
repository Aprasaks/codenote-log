"use client";

import Link from "next/link";
import Image from "next/image";
import "../styles/Sidebar.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onMouseLeave?: () => void; // 👈 추가
}

export default function Sidebar({ isOpen, onClose, onMouseLeave }: Props) {
  return (
    <div
      className={`sidebar ${isOpen ? "open" : ""}`}
      onMouseLeave={onMouseLeave} // 👈 사이드바 영역에서 마우스가 빠지면 닫히게
    >
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
