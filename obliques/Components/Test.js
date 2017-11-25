import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

export default class TestComponent extends Component {
	render() {
		let testPic = {
			uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcvU9E6D0LFC70rO4GntzgGHIn0lzQcvChhp1PCxUEKiT3e2eN'
		};
		return (
			<View style={styles.container}>
				<Image source = {testPic} style={{width: 193, height: 110}}/>
				<Text>You are great!</Text>
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