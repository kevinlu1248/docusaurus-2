import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import StarBanner from '@site/src/components/StarBanner';

function Layout(props) {
  return (
    <>
      <StarBanner />
      <OriginalLayout {...props} />
    </>
  );
}

export default Layout;

