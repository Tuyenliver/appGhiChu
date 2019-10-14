import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  COLOR_PINK, COLOR_PINK_LIGHT,
  COLOR_FACEBOOK, COLOR_PINK_MEDIUM
} from './myColor'
//Cho cac bieu tuong bang label
export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:''
        }
    }
  static navigationOptions = {
    header: null,
  }
  _onPress =()=>{
    let em = this.state.email;
    let mk = this.state.password;
    if(em=="tuyen"&&mk=="123"){
      this.props.navigation.navigate('App')
    }else{
      alert('Dang nhap that bai')
    }
  }
  render() {
    const Divider = (props) => {
      return <View {...props}>
        <View style={styles.line}></View>
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line}></View>
      </View>
    }
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.up}>
            <Ionicons name="ios-speedometer" size={100} color={COLOR_PINK}>
            </Ionicons>
            <Text style={styles.title}>Create new note</Text>
          </View>
          <View style={styles.down}>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput}
                textContentType='emailAddress'
                keyboardType='email-address'
                placeholder="Enter your email"
                onChangeText={(email)=>this.setState({email})}
                value={this.state.email}
              ></TextInput>
            </View>
            <View style={styles.textInputContainer}>
              <TextInput style={styles.textInput}
                placeholder="Enter your password"
                onChangeText={(password)=>this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
              >
              </TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={this._onPress}>
              <Text style={styles.loginButtonTitle}>LOGIN</Text>
            </TouchableOpacity>
            <Divider style={styles.divider}></Divider>
            <Icon.Button
              style={styles.facebookButton}
              name="facebook"
              backgroundColor={COLOR_FACEBOOK}
            >
              <Text style={styles.loginButtonTitle}>Login with Facebook</Text>
            </Icon.Button>
          </View>
        </View>
      </TouchableWithoutFeedback>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK_LIGHT
  },
  up: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  down: {
    flex: 7,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    color: COLOR_PINK_MEDIUM,
    textAlign: 'center',
    width: 400,
    fontSize: 23,
  },
  textInputContainer: {
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  textInput: {
    width: 280,
    height: 45,
  },
  loginButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_PINK
  },
  loginButtonTitle: {
    fontSize: 18,
    color: 'white'
  },
  facebookButton: {
    width: 300,
    height: 45,
    borderRadius: 6,
    justifyContent: 'center'
  },
  line: {
    height: 1,
    flex: 2,
    backgroundColor: 'black'
  },
  textOR: {
    flex: 1,
    textAlign: 'center'
  },
  divider: {
    flexDirection: 'row',
    height: 40,
    width: 298,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
