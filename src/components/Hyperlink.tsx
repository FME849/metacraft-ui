import React, { FC, ReactNode } from 'react';
import {
	StyleProp,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import Animated, {
	SharedValue,
	useAnimatedStyle,
	withSpring,
} from 'react-native-reanimated';
import { useSnapshot } from 'valtio';

import { ThemeState, themeState } from '../utils/state/theme';

import Hoverable from './Hoverable';
import Text from './Text';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

interface Props {
	style?: StyleProp<ViewStyle>;
	children?: ReactNode;
	title?: string;
	titleStyle?: StyleProp<TextStyle>;
	onPress?: () => void;
}

export const Hyperlink: FC<Props> = ({
	style,
	children,
	title,
	titleStyle,
	onPress,
}) => {
	const { colors } = useSnapshot<ThemeState>(themeState);
	const linkStyle = [{ color: colors.link }, titleStyle];

	const useHoveredStyle = (isHovered: SharedValue<boolean>) => {
		return useAnimatedStyle(() => {
			return {
				opacity: withSpring(isHovered.value ? 0.5 : 1),
			};
		}, []);
	};

	return (
		<Hoverable style={style} animatedStyle={useHoveredStyle}>
			<AnimatedTouchable onPress={onPress}>
				{children || <Text style={linkStyle}>{title}</Text>}
			</AnimatedTouchable>
		</Hoverable>
	);
};

export default Hyperlink;
