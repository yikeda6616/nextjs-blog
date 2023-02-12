import { getPostData } from "../../../lib/posts"

export default async function Head({params}) {
  const res = await getPostData(params.id)
  return (
    <>
      <title>{res.title}</title>
    </>
  )
}
