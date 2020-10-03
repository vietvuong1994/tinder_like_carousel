import React from 'react';
import HomeContainer from './src/containers/home';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = props => {
  return (
    <RootSiblingParent>
      <HomeContainer />
    </RootSiblingParent>
  );
};

export default App;
