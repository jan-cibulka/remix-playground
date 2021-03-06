import path from "path";
import fs from "fs/promises";
import parseFrontMatter from "front-matter";

export type Post = {
  slug: string;
  title: string;
};

// relative to the server output not the source!
const postsPath = path.join(__dirname, "..", "posts");

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      return {
        slug: filename.replace(/\.md$/, ""),
        title: attributes.title,
      };
    })
  );
}
