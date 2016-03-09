'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var {
  Component,
  View,
  StyleSheet,
  Image
} = React;

var SplashScreen = React.createClass({
  getInitialState() {
    return {}
  },

  componentDidMount() {
    var navigator = this.props.navigator;

    setTimeout(() => {
      navigator.replace({
        id: 'LoginScreen',
      });
    }, 1000);
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('./images/app_logo.png')} />
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
    width: 300,
    height: 300
  }
});

module.exports = SplashScreen;
