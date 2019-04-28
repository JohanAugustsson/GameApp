import Firebase from 'react-native-firebase';
import { SET_USER_DATA, FETCHING_USER_DATA, ERROR_FETCHING_USER_DATA } from './../reducers/userReducer';

const setUser = (data) =>( {
  type: SET_USER_DATA,
  payload: data,
})

// create a new user in firebase
// email: string
// password: string
export const createUser = ({ email, password, firstName, lastName }) => (dispatch)=> {

  return Firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(data => {
    const { uid } = data.user;



    return Firebase.database().ref('users/' + uid).set({
      firstName,
      lastName,
      email,
      uid,
    });

  }).then((updateUser)=>{
    dispatch(setUser(updateUser));
    return {msg:'success', status: true};
  }).catch(function(error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, errorMessage);
    return {msg: errorMessage, satus: false};
  });
}
