// next.config.ts
import { NextConfig } from "next";

// 1) MDX 플러그인 불러오기 (.md/.mdx 파일 처리)
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// 2) Next.js 기본 설정
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 페이지 확장자 배열에 md, mdx 추가
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // (필요하다면 여기에 다른 설정을 추가)
};

// 3) MDX 플러그인으로 Next.js 설정 감싸서 내보내기
export default withMDX(nextConfig);
