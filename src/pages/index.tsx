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
        <p className={styles.eyebrow}>Generative AI operating system</p>
        <div className={styles.titleRow}>
          <RainbowCircle />
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            Kosmos
          </Heading>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/kosmos/what-is-kosmos">
            What is Kosmos?
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://app.kosmos.computer/signup">
            Get your instance
          </Link>
          <Link className="button button--secondary button--lg" to="/guide/what-is-arco">
            Arco guide
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Kosmos Docs"
      description="A generative AI operating system for integrated work and life — shell, agents, Kosmos Cloud, and Arco UI.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
