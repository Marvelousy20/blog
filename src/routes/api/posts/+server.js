import { json } from "@sveltejs/kit";

async function getPosts() {
  let posts = [];

  // eager: true allows us to just read the content of the files
  const paths = import.meta.glob("/src/posts/*.md", { eager: true });

  for (const path in paths) {
    // path is the key which is the actual url
    const file = paths[path];

    // split the filename using / and get the last division. Replace the .md with nothing so we can get first-post and second-post
    const slug = path.split("/").at(-1)?.replace(".md", "");

    const metadata = file.metadata;
    const post = { ...metadata, slug };
    post.published && posts.push(post);
  }

  posts = posts.sort((first, second) => {
    return new Date(second.date).getTime() - new Date(first.date).getTime();
  });

  return posts;
}

export async function GET() {
  const posts = await getPosts();

  return json(posts);
}
