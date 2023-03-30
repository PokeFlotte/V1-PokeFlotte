import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet } from 'react-native';
import MyPageUI from './MyPageUI';
import WelcomePage from './WelcomePage';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MyPage">
				<Stack.Screen name="MyPage" component={MyPageUI} options={{ title: 'My Page' }} />
				<Stack.Screen name="WelcomePage" component={WelcomePage} options={{ title: 'Welcome' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover',
	},
});
