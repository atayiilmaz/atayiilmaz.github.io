import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function Home() {
  // Read the Markdown file
  const filePath = path.join(process.cwd(), 'content', 'home.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Parse the Markdown content
  const { content } = matter(fileContent);

  // Convert Markdown to HTML
  const processedContent = await remark().use(html, {sanitize: false}).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="rounded-full overflow-hidden w-60 h-60 mb-4">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="prose dark:prose-invert text-center">
        {/* Render the Markdown content */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}