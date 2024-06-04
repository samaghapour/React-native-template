/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/index.tsx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
