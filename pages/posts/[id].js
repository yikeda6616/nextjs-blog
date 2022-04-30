import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props.
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
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
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}