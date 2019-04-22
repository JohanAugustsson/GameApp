import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class Button extends PureComponent {


 render() {
   const { onPress, label, labelColor, bgColor, btWidth } = this.props;
   const color = labelColor;
   return (
     <View style={styles.container}>
       <TouchableOpacity
         style={[ styles.button, { width: btWidth, backgroundColor: bgColor } ] }
         onPress={onPress}
       >
         <Text style={{ color }}>{label}</Text>
       </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
  }
})

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  LabelColor: PropTypes.string,
  btWidth: PropTypes.string,
}

Button.defaultProps = {
  bgColor: '#5a86df',
  LabelColor: '#fafafa',
  width: '100%'
}

export default Button;
