import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  PointLight,
  asset,
  View,
  Scene,
  } from 'react-vr';

import Earth from './src/components/Earth';
import Sun from './src/components/Sun';
import Moon from './src/components/Moon';

export default class SpaceTour extends React.Component {
  render() {
  return (
  <View>
          {/*<PointLight intensity={2.0} style={{ transform: [{ translate: [1, 1, 10] }] }} />
          <AmbientLight intensity={0.1} />*/}
          <Scene style={{ transform: [{ translate: [0, 0, 10] }] }} />
          <Earth style={{ transform: [{ translate: [-8, 0, 0] }] }} />
          <Sun style={{ transform: [{ translate: [0, 0, 0] }, { scale: 9 }] }} />
          <Moon style={{ transform: [{ translate: [-10, 0, 0] }, { scale: 0.5 }] }} />
  </View>
  );
  }
  }

AppRegistry.registerComponent('SpaceTour', () => SpaceTour);