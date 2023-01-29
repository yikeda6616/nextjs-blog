import HomePage from './HomePage'
import { getSortedPostsData } from '../lib/posts'

async function getAllPosts() {
  const res = await  getSortedPostsData();
  return res;
}

export default async function Page() {
  const allPostsData = await getAllPosts();
  return (
    <HomePage allPostsData={allPostsData} />
  )
}
