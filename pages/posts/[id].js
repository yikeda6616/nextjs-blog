import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props.
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// returns an array of possible values for [id]
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}