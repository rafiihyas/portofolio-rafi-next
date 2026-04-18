import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export type Project = {
  title: string;
  slug: string;
  date: string;
  image: string;
  description: string;
  tags: string[];
};

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      ...(matterResult.data as Project),
    };
  });

  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}