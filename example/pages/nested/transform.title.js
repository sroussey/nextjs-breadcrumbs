import React from 'react';

import Breadcrumbs from '@sroussey/nextjs-breadcrumbs';

const App = () => {
  return (
    <Breadcrumbs
      useDefaultStyle={true}
      replaceCharacterList={[{ from: '.', to: ' ' }]}
    />
  );
};

export default App;
