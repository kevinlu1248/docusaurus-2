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
      <p>Please star the Docusaurus repository on GitHub! Current stars: {starsCount}</p>
    </div>
  );
};

export default GithubStarsBanner;

