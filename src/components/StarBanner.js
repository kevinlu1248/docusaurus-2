import React, { useEffect, useState } from 'react';

function StarBanner() {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    fetch('https://api.github.com/repos/facebook/docusaurus')
      .then(response => response.json())
      .then(data => setStars(data.stargazers_count));
  }, []);

  return (
    <div className="star-banner">
      <p>Please star the Docusaurus repository on GitHub! Current stars: {stars}</p>
    </div>
  );
}

export default StarBanner;

