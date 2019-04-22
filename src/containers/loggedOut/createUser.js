import React from 'react';
import Firebase from 'react-native-firebase';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
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
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
    }
  }
  handleInput = (what, value) => {
    this.setState({ [what]: value });
  }

  handleLogin = () => {
    const { password, repeatPassword, firstName, lastName } = this.state;

    if(password !== repeatPassword ) {
      Alert.alert(
      'Incorrect password',
      'Your password dosent match',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
    }
    console.log('Start login! Awesome', firstName, lastName, password, repeatPassword);
    this.handleCreateUser();
  }

  handleCreateUser = () => {
    const email = 'zingo80@msn.com';
    const password = 'testare';
    Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  render() {
    const { firstName, lastName, password, repeatPassword } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BgColor}}>
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>First Name</Text>
        <TextInput
          style={styles.input}
          onChange={(e)=> this.handleInput('firstName', e.target.value)}
          value={firstName}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Last Name</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChange={(e)=> this.handleInput('lastName', e.target.value)}
          value={lastName}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Password</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChange={(e)=> this.handleInput('password', e.target.value)}
          value={password}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Repeat Password</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChange={(e)=> this.handleInput('repeatPassword', e.target.value)}
          value={repeatPassword}
        />
        <Button
          label={'Create User'}
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
