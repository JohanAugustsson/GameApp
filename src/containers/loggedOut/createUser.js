import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import Button from '../../components/buttons/button.js';
import { createUser } from './../../actions/user';
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
      email: '',
    }
  }
  handleInput = (what, value) => {
    this.setState({ [what]: value });
  }

  handleError = ({ title, msg }) => {
    Alert.alert(
    title,
    msg,
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

  validateEmail = ({ email }) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));

  handleCreateUser = () => {
    const { password, repeatPassword, firstName, lastName, email } = this.state;
    const { dispatch } = this.props;
    if(password !== repeatPassword ) return this.handleError({ title: 'Password', msg: 'Password dosen´t match'});
    if(!this.validateEmail({ email })) return this.handleError({ title: 'Email', msg: 'Invalid email'});

    dispatch(createUser({ email, password, firstName, lastName })).then((response)=> {
      if(response.status)
        return this.props.navigation.navigate('Home');
      this.handleError({ title: 'Error', msg: response.msg });
    })
  }

  render() {
    const { firstName, lastName, password, repeatPassword, email } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BgColor}}>
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e)=> this.handleInput('email', e)}
          value={email}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e)=> this.handleInput('firstName', e)}
          value={firstName}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Last Name</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChangeText={(e)=> this.handleInput('lastName', e)}
          value={lastName}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Password</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChangeText={(e)=> this.handleInput('password', e)}
          value={password}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Repeat Password</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChangeText={(e)=> this.handleInput('repeatPassword', e)}
          value={repeatPassword}
        />
        <Button
          label={'Create User'}
          onPress={()=> this.handleCreateUser()}
          labelColor={White}
          bgColor={BtColor}
          btWidth={'60%'}
        />
      </View>
    );
  }
}

export default connect()(LoginScreen);
