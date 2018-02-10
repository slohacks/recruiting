import React from 'react';
import styles from './index.module.css';
import logo from '../assets/logo.png';
import animatedTeam from '../assets/team.gif';

const IndexPage = () => (
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
        We&apos;re recruiting!
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

export default IndexPage;
