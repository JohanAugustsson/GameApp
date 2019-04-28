import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../containers/loggedOut/login.js';
import CreateUser from '../containers/loggedOut/createUser.js';
import MainNavigator from './mainNavigator.js'

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  CreateUser: {
    screen: CreateUser
  },
  Main: {
    screen: MainNavigator
  }
});

export default createAppContainer(AppNavigator);
