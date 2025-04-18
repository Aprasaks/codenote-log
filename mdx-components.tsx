// 사용하지 않을 경우라도, 반드시 존재해야 합니다.
// MDX 컴포넌트를 커스터마이징할 때 여기에 추가하세요.

import type { MDXComponents } from "mdx/types";

// 기본적으로 MDX 파일 안의 요소(<h1>, <p> 등)를 자동 매핑해 줍니다.
// 특별히 덮어쓸 게 없다면 빈 객체를 리턴해 주세요.
export function useMDXComponents(components?: MDXComponents) {
  return components || {};
}
