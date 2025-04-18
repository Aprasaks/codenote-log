// pages/posts/index.tsx
import fs from "fs";
import path from "path";

export default function PostList() {
  const files = fs.readdirSync(path.join(process.cwd(), "pages/posts"));
  return (
    <div>
      <h1>📚 전체 글 목록</h1>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <a href={`/posts/${file.replace(".mdx", "")}`}>{file}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
