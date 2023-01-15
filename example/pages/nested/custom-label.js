import React from 'react';

import Breadcrumbs from '@sroussey/nextjs-breadcrumbs';

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      transformLabel={(title) => title + ' Custom Label'}
    />
  );
};

export default App;
