import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './GithubStarsBanner.module.css';

const GithubStarsBanner = () => {
  const [starsCount, setStarsCount] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/docusaurus')
      .then(response => response.json())
      .then(data => setStarsCount(data.stargazers_count));
  }, []);

  return (
    <div className={clsx('banner', styles.banner)}>
      <p><a href="https://github.com/facebook/docusaurus">Star our repo</a></p>
      <img src="https://img.shields.io/github/stars/facebook/docusaurus?style=social" alt="Stars" />
    </div>
  );
};

export default GithubStarsBanner;

