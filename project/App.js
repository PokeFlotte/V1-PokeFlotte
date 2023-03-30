import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet } from 'react-native';
import Start from './Start';
import Home from './Home';
import Option from './Option';
import Pokedex from './Pokedex';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Start">
				<Stack.Screen name="Start" component={Start} options={{ title: 'Start', headerShown: false }} />
				<Stack.Screen name="Home" component={Home} options={{ title: 'home', headerShown: false }} />
				<Stack.Screen name="Pokedex" component={Pokedex} options={{ title: 'Pokedex', headerShown: true }} />
				<Stack.Screen name="Option" component={Option} options={{ title: 'Option', headerShown: false }} />
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
