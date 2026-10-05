import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}
 
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>
          Hello! I’m a Project Manager with a track record of driving cross-functional 
          projects, streamlining operations, and delivering high-impact solutions from 
          concept to execution. I specialize in aligning business strategy with technical 
          execution to keep initiatives on schedule and within budget.
        </p>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <p>
          I write actively about my experiences and lessons learned in project management,
          leadership, and personal growth. 
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <h1>Socials</h1>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <a href="https://www.linkedin.com/in/rita-akaange-1b0a3b1b2/">LinkedIn</a>
          </li>
          <li className={utilStyles.listItem}>
            <a href="mailto:akaangeerita@gmail.com">Email</a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}