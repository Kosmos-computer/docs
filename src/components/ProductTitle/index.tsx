import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import RainbowCircle from '@site/src/components/RainbowCircle';
import styles from './styles.module.css';

type ProductTitleProps = {
  name: string;
};

/** Product name with the animated color orb — same mark as the docs homepage. */
export default function ProductTitle({name}: ProductTitleProps): ReactNode {
  return (
    <div className={styles.titleRow}>
      <RainbowCircle />
      <Heading as="h1" className={styles.title}>
        {name}
      </Heading>
    </div>
  );
}
