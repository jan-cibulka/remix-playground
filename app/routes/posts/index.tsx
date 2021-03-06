import { useLoaderData } from "remix";
import { getPosts } from "~/post";

export type Post = {
  slug: string;
  title: string;
};

export const loader = () => {
  return getPosts();
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
