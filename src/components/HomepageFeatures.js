import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Continuous Learning',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        PMs should cultivate a learning culture where people keep learning & sharing.
        To be able to adapt to changing tools, technologies, and customer needs.
      </>
    ),
  },
  {
    title: 'Teams Approach',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Collaboration unlocks potential. Success comes from working hand-in-hand with PMs,
        engineers,and stakeholders, turning shared goals into powerful outcomes.
      </>
    ),
  },
  {
    title: 'Deliver Working Software',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Value lives in action. Focus on delivering real, working software that
        solves problems, drives impact, and creates customer delight.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
