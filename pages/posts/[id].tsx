import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  }
}

export default function Post({ postData }: Props) {
  const { title, date, contentHtml } = postData;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  )
}

// returns an array of possible values for [id]
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false // any paths not returned by getStaticPaths will result in a 404 page.
  }
}

// The post page is now using the getPostData function in getStaticProps to get the post data and return it as props.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}