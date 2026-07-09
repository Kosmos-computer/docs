import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Token-driven theming',
    description:
      'Every surface uses --arco-* design tokens. Light, dark, and custom themes without hardcoded values.',
  },
  {
    title: 'Four component tiers',
    description:
      'Tokens → Primitives → Blocks → Containers. Blocks are the AI\'s unit of generation.',
  },
  {
    title: 'One registry contract',
    description:
      'defineBlock() drives schema, validation, prompt, docs, and render — zero drift between what the AI emits and what renders.',
  },
  {
    title: 'Multi-surface adaptivity',
    description:
      'Window size classes and form-factor policies let the same block reflow across desktop, phone, and widget surfaces.',
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
          <p className={styles.sectionEyebrow}>Why Arco</p>
          <Heading as="h2" className={styles.sectionTitle}>
            Built for generative UI
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
