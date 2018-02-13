import React from 'react';
import TextRotator from '../components/TextRotator';
import styles from './index.module.css';
import logo from '../assets/logo.png';
import animatedTeam from '../assets/team.gif';

/* eslint-disable react/prop-types */
const IndexPage = ({ data }) => (
  <div>
    <header className={styles.hero}>
      <img
        src={logo}
        alt="Logo"
        className={styles.logo}
      />
      <h1 className={styles.h1}>
        SLO Hacks
      </h1>
      <h2 className={styles.recruitingText}>
        We&rsquo;re <br />
        recruiting <br />
        <TextRotator
          words={data.site.siteMetadata.adjectives.split(', ')}
          colors={['#0F96F5', '#05D26E', '#FFC819']}
          delay={1000}
        />
      </h2>
      <img
        src={animatedTeam}
        alt="SLO Hacks Team"
        className={styles.animatedTeam}
      />
    </header>
    <div className={styles.spacer} />
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    />
  </div>
);

/* eslint-disable no-undef */
export const query = graphql`
  query DataQuery {
    site {
      siteMetadata {
        adjectives
      }
    }
  }
`;

export default IndexPage;
