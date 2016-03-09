'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  AppRegistry,
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity,
  Image
} = React;

var LoginScreen = React.createClass({
  getInitialState() {
    return {}
  },

  randomString() {
    var buffer = "";
    var alphaNumericSet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for(var i=0; i<10; i++) {
      var randomOffset = Math.floor(Math.random() * alphaNumericSet.length);
      buffer += alphaNumericSet.charAt(randomOffset);
    }

    return buffer;
  },

  login() {
    this.props.navigator.push({
      id: 'MainScreen',
      name: 'Home Screen',
      valueProp: this.randomString()
    });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./images/app_logo.png')} />
        </View>
        <View style={styles.inputs}>
          <View style={styles.inputContainer}>
            <Image style={styles.credentials} source={require('./images/login_details.png')}/>
          </View>
        </View>
        <View style={styles.signin}>
          <Text style={styles.boldWhite} onPress={() => this.login()}>Sign In</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .5,
    backgroundColor: 'transparent'
  },
  logo: {
    width: 200,
    height: 200
  },
  credentials: {
    width: 200,
    height: 200
  },
  signin: {
    backgroundColor: '#ff3366',
    padding: 20,
    alignItems: 'center'
  },
  inputs: {
    marginTop: 10,
    marginBottom: 10,
    flex: .25
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: .5,
    backgroundColor: 'transparent'
  },
  boldWhite: {
    color: '#ffffff',
    fontWeight: 'bold'
  }
});

module.exports = LoginScreen;
