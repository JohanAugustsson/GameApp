import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../../components/buttons/button.js';
const BgColor = '#0f3073';
const BtColor = '#5a86df';
const White = '#efeff1';

const styles = StyleSheet.create({
  input: {
    borderColor: White,
    borderBottomWidth: 1,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    marginBottom: 20,
    color: White,
    width: '60%'
  }
})

class LoginScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      password: '',
    }
  }
  handleInput = (what, value) => {
    this.setState({ [what]: value });
  }

  handleLogin = () => {
    console.log('Start login! Awesome');
  }

  render() {
    const { user } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BgColor}}>
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>User</Text>
        <TextInput
          style={styles.input}
          onChange={(e)=> this.handleInput('user', e.target.value)}
          value={user}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Password</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChange={(e)=> this.handleInput('password', e.target.value)}
          value={user}
        />
        <Button
          label={'Login'}
          onPress={()=> this.handleLogin()}
          labelColor={White}
          bgColor={BtColor}
          btWidth={'60%'}
        />
      </View>
    );
  }
}

export default (LoginScreen);
