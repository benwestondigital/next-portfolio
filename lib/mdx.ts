import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import remarkGfm from 'remark-gfm';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import { MDXComponents } from '@/components/MDXComponents';

const root = process.cwd();

export async function getFiles(type: 'projects') {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getFileBySlug(type: 'projects', slug: string) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      //@ts-ignore https://github.com/hashicorp/next-mdx-remote/issues/86#issue-775527837
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        mdxPrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: data,
  };
}

interface ProjectData {
  slug: string;
  [key: string]: any;
}

export async function getAllFilesFrontMatter(
  type: 'projects'
): Promise<ProjectData[]> {
  const dataDir = path.join(root, 'data', type);

  try {
    const filepaths = await fs.promises.readdir(dataDir);

    return await Promise.all(
      filepaths.map(async (filename) => {
        const filePath = path.join(dataDir, filename);
        const source = await fs.promises.readFile(filePath, 'utf-8');
        const { data } = matter(source);

        return {
          slug: filename.replace('.mdx', ''),
          ...data,
        };
      })
    );
  } catch (err) {
    console.error('Error reading files:', err);
    throw err;
  }
}
