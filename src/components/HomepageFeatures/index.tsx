import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Import pug image from static folder
import PugIcon from '@site/static/img/pug.png';

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.heroBanner}>
      <img src={PugIcon} alt="Pug Icon" className={styles.pugImage} />
      <h1>Welcome to PUG Docs</h1>
      <p>Playful, Useful, and Genius — just like a pug.</p>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Get Started
        </Link>
      </div>
    </section>
  );
}
