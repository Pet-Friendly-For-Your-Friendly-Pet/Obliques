import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, NavigatorIOS } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


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
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		height: responsiveHeight(10),
    	width: responsiveWidth(80),
	},
});