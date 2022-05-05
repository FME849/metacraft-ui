import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import Button from '../Button';

interface Props {
	children: ReactNode[];
}

export const Carousel: FC<Props> = ({ children }) => {
	return (
		<View style={styles.container}>
			<View style={[styles.carouselContainer]}>
				{children.map((child, index) => (
					<View style={styles.slideContainer} key={index}>
						{child}
					</View>
				))}
			</View>
			<View style={[styles.prevButton, styles.button]}>
				<Button title={'Prev'} />
			</View>
			<View style={[styles.nextButton, styles.button]}>
				<Button title={'Next'} />
			</View>
		</View>
	);
};

export default Carousel;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	carouselContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	slideContainer: {
		width: '100%',
	},
	button: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		justifyContent: 'center',
	},
	prevButton: {
		left: 10,
	},
	nextButton: {
		right: 10,
	},
});
