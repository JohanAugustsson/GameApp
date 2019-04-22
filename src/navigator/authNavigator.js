import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../containers/loggedOut/login.js';
import CreateUser from '../containers/loggedOut/createUser.js';


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  CreateUser: {
    screen: CreateUser
  }
});

export default createAppContainer(AppNavigator);
