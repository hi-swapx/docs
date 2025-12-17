import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// --- 图标组件定义 (Inline SVGs) ---

const EfficiencyIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#f0441d', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#ff8e53', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <path stroke="url(#grad1)" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="rgba(240, 68, 29, 0.1)" />
  </svg>
);

const FocusIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" stroke="#f0441d" strokeOpacity="0.8" fill="rgba(240, 68, 29, 0.05)"/>
    <circle cx="12" cy="12" r="3" fill="#f0441d"/>
    <line x1="12" y1="2" x2="12" y2="4" stroke="#f0441d"/>
    <line x1="12" y1="20" x2="12" y2="22" stroke="#f0441d"/>
    <line x1="2" y1="12" x2="4" y2="12" stroke="#f0441d"/>
    <line x1="20" y1="12" x2="22" y2="12" stroke="#f0441d"/>
  </svg>
);

const ReactIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <g stroke="#f0441d">
      <circle cx="12" cy="12" r="2" fill="#f0441d"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" strokeOpacity="0.8" fill="rgba(240, 68, 29, 0.05)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" strokeOpacity="0.8"/>
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" strokeOpacity="0.8"/>
    </g>
  </svg>
);

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: EfficiencyIcon,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: FocusIcon,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: ReactIcon,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureSvgContainer)}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}