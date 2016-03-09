'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} = React;

var MainScreen = React.createClass({
	getDefaultProps: function() {
    return {
      valueProp: 'default value'
    };
  },

  getInitialState() {
    return {}
  },

  render() {
    return (
      <View style={styles.container}>
        <Navigator
          renderScene = {this.renderScene}
          navigator = {this.props.navigator}
          navigationBar = {
            <Navigator.NavigationBar style={styles.navBar}
                routeMapper={NavigationBarRouteMapper} />
          } />
      </View>
    );
  },

  renderScene(route, navigator) {
		return (
			<View style={styles.valueProp}>
				<Text style={styles.valuePropText}>
					Value from login screen: {this.props.valueProp}
				</Text>
			</View>
		)
  }
});

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity onPress={() => navigator.parentNavigator.push({id: 'LoginScreen', name: 'Login Screen'})}>
        <Text style={styles.navBarText}>
          Back
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity onPress={() => navigator.parentNavigator.push({id:'BogeyScreen', name: 'Bogey Screen'})}>
	      <Text style={styles.navBarText}>
	        Invalid Screen
	      </Text>
    	</TouchableOpacity>
  	);
  },
  Title(route, navigator, index, navState) {
    return (
      <Text style={styles.navBarText}>
        Navigation App Title
      </Text>
    );
  }
};

var styles = StyleSheet.create({
	container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ffffff'
  },
	navBar: {
		backgroundColor: '#ff3366',

	},
	navBarText: {
		flex: 1,
		color: '#ffffff',
		fontWeight: 'bold',
		textAlign: 'center',
		justifyContent: 'center',
		margin: 10,
		fontSize: 16
	},
	valueProp: {
		top: 100,
		left: 5,
		flex: 1
	},
	valuePropText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000000'
	}
});

module.exports = MainScreen;
