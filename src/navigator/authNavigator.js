// import React from 'react';
// import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../containers/loggedOut/login.js';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default createAppContainer(AppNavigator);
