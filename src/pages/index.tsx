import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Tactyc allows you to turn any Excel model into an <strong>interactive web app</strong>. Tactyc lets you create
        and design webapps without any code.
      </>
    ),
  },
  {
    title: 'Analyze',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Tactyc provides one click analysis of your Excel model, from&nbsp;
        <strong>monte-carlo</strong> to <strong>input analysis</strong>. It even
        has a <strong>non-linear solver</strong> that can solve for practically any formula input.
      </>
    ),
  },
  {
    title: 'Powered by the most advanced Excel engine on the market',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Tactyc supports over <strong>300+ Excel functions</strong> supported including <strong>circularity</strong>.
        New functions are being added every day. Interact with your Excel models through&nbsp;
        <a href='https://tactyc.io'>tactyc.io</a> or the API.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Tactyc transforms any financial model into intuitive and interactive browser-based dashboards
       that enable smarter decisions within seconds.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
