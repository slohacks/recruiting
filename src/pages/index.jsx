import React from 'react';
import TextRotator from '../components/TextRotator';
import styles from './index.module.css';
import logo from '../assets/logo.png';
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
        We&rsquo;re
        recruiting<br />
        <TextRotator
          words={data.site.siteMetadata.adjectives.split(', ')}
          colors={['#FFFFFF']}
          delay={1000}
        />
      </h2>
    </header>
    <div className={styles.window} />
    <section className={styles.content}>
      <div className={styles.text}>
        <h2>Who are we?</h2>
        <p>SLO Hacks is an ASI club that puts on quarterly hackathons. Our fall and spring hackathons are geared towards our local community, while our winter hackathon is our flagship event, bringing students from all over the nation. Our last event, SLO Hacks 2019, brought 300+ students from a variety of states.</p>
        <p>Our mission is to bring the national hacker community at other universities over to SLO. We also hope to bridge the professional and student communities in the area.</p>
        <h2>Why should you join?</h2>
        <p>As a hackathon organizer, you’ll gain valuable experience by working on amazing events. Our team members work in a variety of areas, they interact with great sponsors from companies like Viasat, Google, and Intuit, create open source tools to empower our events, plan logistics for events comprising hundreds of people, and much much more.</p>
        <h2>What do our teams do?</h2>
      </div>
      <div className={styles.pseudoTable}>
        <div className={styles.design}>
          <h3>Design</h3>
          <ul>
            <li>Design website mockups & graphics for marketing</li>
            <li>Help establish creative direction/theme</li>
            <li>Work on the most front-facing work of SLO Hacks</li>
            <li>Note: required experience in UI/UX, preferably Adobe tools and Sketch; submit portfolio in application</li>
          </ul>
        </div>
        <div className={styles.hackerExperience}>
          <h3>Hacker Experience</h3>
          <ul>
            <li>Procure food/snack/drink sponsors</li>
            <li>Manage hacker transportation (flights, buses, carpools)</li>
            <li>Coordinate venue details and decorations</li>
            <li>Coordinate scheduling of all hackathon-related events</li>
          </ul>
        </div>
        <div className={styles.marketing}>
          <h3>Marketing</h3>
          <ul>
            <li>Promote our event and club on our social media platforms</li>
            <li>Work with our design team to get graphics publicized</li>
            <li>Create marketing campaigns to promote our events to attendees</li>
            <li>Work with local press and the college to market event community-wide</li>
          </ul>
        </div>
        <div className={styles.sponsorship}>
          <h3>Sponsorship</h3>
          <ul>
            <li>Help deal with club finances</li>
            <li>Work with industry sponsors to fund hackathon</li>
          </ul>
        </div>
        <div className={styles.tech}>
          <h3>Tech</h3>
          <ul>
            <li>Code our website, application portal, internal tools</li>
            <li>Note: experience in web development (preferably with full-stack with HTML, CSS, Javascript, React.js, NoSQL/MongoDB/Firebase); submit portfolio and/or GitHub profile in application</li>
          </ul>
        </div>
      </div>
    </section>
    <section className={styles.apply}>
      <h2>Want to join our team?</h2>
      <Button
        name="Apply"
        href="https://forms.gle/VGkjtRn4kBCk19eF8"
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
