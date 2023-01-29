import PostPage from "./PostPage";
import { getPostData } from "../../../lib/posts";

async function getPost(id: string) {
  const res = await getPostData(id);
  return res;
}

export default async function Post({ params }) {
  const postData = await getPost(params.id);
  return <PostPage postData={postData} />;
}
