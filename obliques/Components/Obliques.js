import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

import Strategies from './Strategies.js';


export default class Obliques extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text>This is the Strategies container</Text>
				<Strategies />
			</View>
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