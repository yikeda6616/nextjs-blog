"use client";
import Date from "../../../components/date";
import Layout from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.css";

export default function Post({ postData }) {
  const { title, date, contentHtml } = postData;

  return (
    <Layout>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </Layout>
  );
}
