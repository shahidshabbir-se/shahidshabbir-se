'use client';
import Image from 'next/image';
import './page.sass';
import Icon from './icons';
import Link from 'next/link';
import { Fragment } from 'react';
import Typewriter from '@/app/animations/typeWriter';
import { socialLinks } from './components/bottomBar/bottomBar';

export default function Home() {
  return (
    <Fragment>
      <section className="section-1">
        <div className="slide-container">
          <div className="slide-wrapper">
            <span className="slide">&nbsp;code</span>
            <span className="slide">&nbsp;code</span>
          </div>
        </div>
        <Link href={'/contact'} className="phone-wrapper">
          <Icon name="mail" className="phone" />
          <div className="dot" />
        </Link>
        <h1 className="tagline">
          Hi, I’m Shahid, a <br />
          <span className="special-char">creative</span>
          developer
        </h1>
      </section>
      <section></section>
      <section className="section-2">
        <div className="typeWriter-wrapper">
          <Typewriter
            text="Your interactive developer"
            speed={75}
            highlightedText="interactive"
            highlightedClass="special-text"
          />
        </div>
        <div className="tables">
          <div className="table-1">
            <div className="table-heading">about-me</div>
            <div className="table-content">
              <ul className="list">
                <li>
                  Nice to meet you! I'm Shahid, I'm a
                  <span>Full Stack Web Developer</span>
                </li>
                <li>
                  I'm passionate about both
                  <span>web design</span>
                  and <span>web development</span>, with focus in all of its
                  aspects. This is where both my
                  <span>technical</span>
                  and
                  <span> creative</span>
                  skills can be used at their best.
                </li>
                <li>
                  I bring my
                  <span>expertise</span>
                  in my collaborations with
                  <span>web agencies</span>,<span>companies</span>, and other
                  <span>freelance professionals</span>
                  in the field, to add value to the projects I work on.
                </li>
                <li>
                  <span>Coding</span>
                  for me is not just my work, I like
                  <span>experimenting</span>
                  with many
                  <span>technologies</span>
                  and I also maintain some
                  <span>personal projects</span>. Whenever I can, I like to
                  contribute to
                  <span>open-source</span>
                  to give back to the community.
                </li>
              </ul>
            </div>
          </div>
          <div className="table-2">
            <div className="table-heading">portrait</div>
            <div className="image-container">
              <Image
                src="/images/profile.png"
                width={350}
                height={320}
                className="profile-image"
              />
            </div>
          </div>
          <div className="table-3">
            <div className="table-heading">me-online</div>
            <div className="table-content">
              {
                <ul className="list">
                  {socialLinks.map((socialLink, index) => (
                    <li key={index}>
                      <a target="_blank" href={socialLink.url}>
                        {socialLink.name === 'twitter'
                          ? `X {${socialLink.name}}`
                          : socialLink.name}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          width="1em"
                          height="1em"
                          style={{ verticalAlign: 'middle' }}
                        >
                          <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              }
            </div>
          </div>
          <Link href={'/about'} className="about-me">
            <p>about-me</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              style={{ verticalAlign: 'middle', transform: 'rotate(45deg)' }}
            >
              <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
            </svg>
          </Link>
        </div>
      </section>
      <section className="section-3">
        <div className="table">
          <div className="table-heading">colloboration</div>
          <div className="table-content">
            <div className="profile">
              <img src="/images/profile.png" className="profile-img" alt="" />
              <Icon name="clap" className="clap-icon" />
            </div>
            <div className="text-content">
              <p className="text">Let’s work together on your next project</p>
              <Link href={'/contact'} className="contact-me">
                <p>let's-get-in-touch</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  style={{
                    verticalAlign: 'middle',
                    transform: 'rotate(45deg)',
                  }}
                >
                  <path d="M7 6a1 1 0 0 0-1 1 1 1 0 0 0 1 1h7.59l-8.3 8.3a1 1 0 0 0 0 1.4 1 1 0 0 0 1.42 0L16 9.42V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7l-.03-.17-.03-.14-.02-.07a1 1 0 0 0-.21-.33 1 1 0 0 0-.33-.21A1 1 0 0 0 17 6Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
