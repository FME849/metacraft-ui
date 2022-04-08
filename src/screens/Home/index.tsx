import React, { FC, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from 'components/Button';
import { BindDirections, modalActions } from 'utils/store/modal';

import Popup from './Popup';

const styles = StyleSheet.create({
	buttonContainer: {
		marginTop: 20,
	},
});

export const HomeScreen: FC = () => {
	const containerRef = useRef<View>(null);
	const showPopup = () => {
		modalActions.show({
			id: 'Cloud Le',
			component: Popup,
			bindingDirection: BindDirections.Top,
			bindingRef: containerRef,
		});
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<View ref={containerRef}>
				<Text>Welcome to Metacraft UI</Text>
			</View>
			<Text>
				Still too early to have something to show.. but this going to be fun!
			</Text>
			<Button style={styles.buttonContainer} onPress={showPopup} />
		</View>
	);
};

export default HomeScreen;
