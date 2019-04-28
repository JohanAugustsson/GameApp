import React from 'react';
import { connect } from 'react-redux';
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
   this.props.navigation.navigate('Home')
  }

  render() {
    const { user } = this.state;
    console.log(12, this.props.userInStore);
    console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BgColor}}>
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>User</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e)=> this.handleInput('user', e)}
          value={user}
        />
        <Text style={{ color: White, width: '60%', textAlign: 'left' }}>Password</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          onChangeText={(e)=> this.handleInput('password', e)}
          value={user}
        />
        <Button
          label={'Login'}
          onPress={()=> this.handleLogin()}
          labelColor={White}
          bgColor={BtColor}
          btWidth={'60%'}
        />

        <Button
          label={'Create new user'}
          onPress={()=> this.props.navigation.navigate('CreateUser')}
          labelColor={White}
          bgColor={BtColor}
          btWidth={'60%'}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ userInStore: state.user })

export default connect(mapStateToProps)(LoginScreen);
