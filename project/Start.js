import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import backImage from "./../assets/back.png";

export default function Start({ navigation }) {
    function handleClick() {
        navigation.navigate('Home');
    }

    return (
        <ImageBackground source={backImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Boire de l'eau est essentiel pour maintenir une bonne santé.
                        L'eau aide à réguler la température corporelle, à éliminer les toxines,
                        à maintenir une peau saine et à prévenir la déshydratation.   <br></br>   <br></br>
                        Il est important de boire une quantité suffisante d'eau chaque jour,
                        et cette quantité varie en fonction du poids de chaque individu.</Text>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={handleClick}>
                    <Text style={styles.startButtonText}>Let's GO</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        /*backgroundColor: 'rgba(12,192,223,0.5)',*/
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    headerText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textInput: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    startButton: {
        backgroundColor: '#C80D0D',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    startButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});