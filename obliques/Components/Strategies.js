import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

// const {
//   width: SCREEN_WIDTH,
//   height: SCREEN_HEIGHT,
// } = Dimensions.get('window');

// const scale = SCREEN_WIDTH / 320;

// export function normalize(size) {
//   if (Platform.OS === 'ios') {
//     return Math.round(PixelRatio.roundToNearestPixel(size))
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
//   }
// }



export default class Strategies extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Strategies</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: responsiveHeight(50),
		width: responsiveWidth(50),
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
});