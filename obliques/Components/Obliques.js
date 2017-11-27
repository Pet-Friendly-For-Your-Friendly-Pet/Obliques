import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, NavigatorIOS } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Strategies from './Strategies.js';


export default class Obliques extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Strategies />
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
});