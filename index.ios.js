/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

var SplashScreen = require('./SplashScreen');
var LoginScreen = require('./LoginScreen');
var MainScreen = require('./MainScreen');
var _navigator = null;

class NavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'SplashScreen', name: 'SplashScreen'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    )
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    _navigator = navigator;

    switch(routeId) {
      case 'SplashScreen':
        return (<SplashScreen navigator={navigator} />);
      case 'LoginScreen':
        return (<LoginScreen navigator={navigator} />);
      case 'MainScreen':
        return (<MainScreen navigator={navigator} valueProp={route.valueProp} data={route.data}/>);
      default:
        return this.noRoute(navigator);
    }
  }

  gotoNext() {
    this.props.navigator.push({
      id: 'MainScreen',
      name: 'Home Screen',
    });
  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Unable to render requested screen</Text>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Use back button to return or tap here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeNavigationTemplate', () => NavigationApp);

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff'
  }
});
