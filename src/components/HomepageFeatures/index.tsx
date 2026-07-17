import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'One shell for work & life',
    description:
      'Chat, code, files, and generated apps share one focus model — agents keep context across every workspace.',
  },
  {
    title: 'Kosmos Cloud',
    description:
      'Provision a private hosted instance at app.kosmos.computer. Manage billing, storage, and credits from Settings.',
  },
  {
    title: 'Desktop, mobile, browser',
    description:
      'Electron desktop, Android APK, Chromebook, SteamOS, and browser/PWA — connect thin clients to your instance.',
  },
  {
    title: 'Arco generative UI',
    description:
      'Typed tokens, components, and blocks that agents assemble inside Kosmos — documented in Guide and Reference.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Why Kosmos</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Built as an operating system for agents
          </Heading>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
