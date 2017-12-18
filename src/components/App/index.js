import React from 'react';

import Button from '../Button';
import ContentWrapper from '../ContentWrapper';

function App() {
  return (
    <ContentWrapper>
      <Button bgColor="red">Hello World</Button>
      <Button bgColor="pink">Hello World</Button>
      <Button bgColor="purple">Hello World</Button>
      <Button bgColor="deepPurple">Hello World</Button>
      <Button bgColor="indigo">Hello World</Button>
      <Button>Hello World</Button>
    </ContentWrapper>
  );
};

export default App;
