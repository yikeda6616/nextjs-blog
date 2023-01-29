"use client";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Layout from "../components/layout";
// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.

type Props = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};
export default function HomePage({ allPostsData }: Props) {
  return (
    <Layout>
      <div>
        <section className={utilStyles.headingMd}>
          <p>
            Hello, I'm <strong>Yasushi</strong>. Aspiring coder with a thing for
            ski and diving. You can contact me on{" "}
            <a href="https://twitter.com/yikeda6616">Twitter</a>.
          </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{" "}
            <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
          </p>
        </section>
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData?.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
