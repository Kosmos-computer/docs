import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import RainbowCircle from '@site/src/components/RainbowCircle';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <p className={styles.eyebrow}>Generative UI library</p>
        <div className={styles.titleRow}>
          <RainbowCircle />
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            href="https://app.kosmos.computer">
            Get your instance
          </Link>
          <Link className="button button--secondary button--lg" to="/guide/getting-started">
            Read the guide
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://www.kosmos.computer">
            View Kosmos site
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Arco — Generative UI library"
      description="Typed, themeable components and blocks that AI assembles into apps inside Kosmos.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
