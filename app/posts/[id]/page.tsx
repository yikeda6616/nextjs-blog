import Post from "./Post";
import { getAllPostIds, getPostData } from "../../../lib/posts";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getAllPostIds()
}

async function getPost(id: string) {
  const res = await getPostData(id);
  return res;
}

export default async function Page({ params }: { params: { id: string } }) {
  const postData = await getPost(params.id);
  return <Post postData={postData} />;
}
