import React from 'react';

import Breadcrumbs from '@sroussey/nextjs-breadcrumbs';

const App = () => {
  return <Breadcrumbs useDefaultStyle={true} omitIndexList={[1]} />;
};

export default App;
