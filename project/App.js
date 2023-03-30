import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet } from 'react-native';
import Start from './Start';
import Home from './Home';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="MyPage">
				<Stack.Screen name="MyPage" component={Start} options={{ title: 'Start', headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ title: 'home', headerShown: false }} />
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
