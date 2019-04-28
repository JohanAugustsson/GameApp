import { createStackNavigator,createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './../containers/home/home.js';
import Settings from './../containers/settings/settings.js';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
});

const SettingsNavigator = createStackNavigator({
  Settings: {
    screen: Settings
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeNavigator,
  Settings: SettingsNavigator,
});

export default createAppContainer(TabNavigator);
