import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Dimensions, Platform, PixelRatio, StackNavigator} from 'react-native';

import LandingScreen from './LandingScreen.js';

class Landing extends Component {
	static navigationOptions = {
		title: 'Oblique Strategies',
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Button title = "Strategize"
			onPress={() => navigate('Obliques', {})}/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
});