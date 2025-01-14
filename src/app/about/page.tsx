import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function About() {
  // Read markdown file
  const filePath = path.join(process.cwd(), 'content', 'about.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter and content
  const { content } = matter(fileContent);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="prose dark:prose-invert mx-auto pt-20">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}