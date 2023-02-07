import PostPage from "./PostPage";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPostIds()
}

async function getPost(id: string) {
  const res = await getPostData(id);
  return res;
}

export default async function Post({ params }) {
  const post = await getPost(params.id);
  return <PostPage postData={post} />;
}
