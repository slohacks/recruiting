import React from 'react';
import TextRotator from '../components/TextRotator';
import styles from './index.module.css';
import logo from '../assets/logo.png';
import animatedTeam from '../assets/team.gif';
import Button from '../components/Button';

/* eslint-disable react/prop-types, max-len */
const IndexPage = ({ data }) => (
  <div>
    <header className={styles.hero}>
      <a
        href="https://slohacks.com/"
        className={styles.logoLink}
      >
        <img
          src={logo}
          alt="Logo"
          className={styles.logo}
        />
      </a>
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
    <div className={styles.window} />
    <section className={styles.content}>
      <div className={styles.text}>
        <h2>Who are we?</h2>
        <p>The SLO Hacks team is dedicated to spreading a culture of tech and innovation throughout Cal Poly. Aside from our flagship event, we host multiple hackathons each year. Our team is composed of five groups: Design, Hacker Experience, Marketing, Sponsorship, and Tech.</p>
        <h2>Why should you join?</h2>
        <p>As a hackathon organizer, you’ll gain valuable experience by working on amazing events. Our team members work in a variety of areas, they interact with great sponsors from companies like Viasat, Google, and Intuit, create open source tools to empower our events, plan logistics for events comprising hundreds of people, and much much more.</p>
        <h2>What do your teams do?</h2>
      </div>
      <div className={styles.pseudoTable}>
        <div className={styles.design}>
          <h3>Design</h3>
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>set</li>
          </ul>
        </div>
        <div className={styles.hackerExperience}>
          <h3>Hacker Experience</h3>
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>set</li>
          </ul>
        </div>
        <div className={styles.marketing}>
          <h3>Marketing</h3>
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>set</li>
          </ul>
        </div>
        <div className={styles.sponsorship}>
          <h3>Sponsorship</h3>
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>set</li>
          </ul>
        </div>
        <div className={styles.tech}>
          <h3>Tech</h3>
          <ul>
            <li>lorem</li>
            <li>ipsum</li>
            <li>dolor</li>
            <li>set</li>
          </ul>
        </div>
      </div>
    </section>
    <section className={styles.apply}>
      <h2>Want to join our team?</h2>
      <Button
        name="Apply"
        href="https://goo.gl/forms/E6MNzlmCNYI6R5Lo1"
      />
    </section>
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
