'use client';
import React from 'react';
import Time from './time';
import './bottomBar.sass';
import Icon from '@/app/icons';

export const socialLinks = [
  {
    name: 'github',
    url: 'https://github.com/shahidshabbir-se',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/shahid-shabbir-se/',
  },
  {
    name: 'twitter',
    url: '#',
  },
  {
    name: 'instagram',
    url: '#',
  },
  {
    name: 'facebook',
    url: '#',
  },
];

const BottomBar = () => {
  return (
    <aside className="bottom-bar">
      <div className="location-time-wrapper">
        <div className="location">
          Based in Pakistan
          <span role="img" aria-label="Pakistan Flag">
            🇵🇰
          </span>
        </div>
        <span className="time">
          Local Time
          <Time />
        </span>
      </div>
      <div className="icon-wrapper">
        {socialLinks.map((socialLink, index) => (
          <a target="_blank" href={socialLink.url}>
            <Icon name={socialLink.name} className="icon" />
          </a>
        ))}
      </div>
      <div className="upDownfavicon">
        <span className="dot" />
      </div>
    </aside>
  );
};

export default BottomBar;
