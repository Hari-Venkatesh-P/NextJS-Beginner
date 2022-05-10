import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <title>{siteTitle}</title>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Routes : </h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}>
            <Link href={`/indexed-route`}>
              <a>{"Indexed route"}</a>
            </Link>
            <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/route/nested-route`}>
              <a>{"Nested route"}</a>
            </Link>
            <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/route/6`}>
              <a>{"Dynamic route"}</a>
            </Link>
            <br />
          </li>
          <li className={utilStyles.listItem}>
            <Link href={`/route/HarryPotter/Fantasy`}>
              <a>{"Slug route"}</a>
            </Link>
            <br />
          </li>
          <li className={utilStyles.listItem}>
            <p
              onClick={() => {
                window.open(
                  "https://www.smashingmagazine.com/2021/06/client-side-routing-next-js/"
                );
              }}
            >
              <a>{"Reference"}</a>
            </p>
            <br />
          </li>
        </ul>
      </section>
    </Layout>
  );
}