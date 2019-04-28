import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
const BgColor = '#0f3073';
const White = '#efeff1';

class LoginScreen extends React.Component {
  render() {
    console.log(12, this.props.userInStore);
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BgColor}}>
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>This is the Settings screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({ userInStore: state.user })

export default connect(mapStateToProps)(LoginScreen);
