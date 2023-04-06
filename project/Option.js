import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

import backImage from "./../assets/back.png";


const saveDataToLocalStorage = (key, newData) => {
    try {
        // Charger les données existantes du LocalStorage
        const jsonString = localStorage.getItem(key);
        let existingData = {};

        if (jsonString) {
            existingData = JSON.parse(jsonString);
        }

        // Fusionner les objets existants et les nouveaux objets
        const mergedData = { ...existingData, ...newData };

        // Enregistrer les données fusionnées dans le LocalStorage
        const mergedJsonString = JSON.stringify(mergedData);
        localStorage.setItem(key, mergedJsonString);
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement des données dans le LocalStorage :', error);
    }
};

function calculWater(weight, nbDefault = 8) {
    weight = 1 * weight;
    if (weight <= 0 || weight == NaN) {
        console.log("Erreur ! Un poids doit être positif");
        return nbDefault;
    }
    else if (weight < 36) {
        return 4;
    }
    else if (weight < 54) {
        return 6;
    }
    else if (weight < 72) {
        return 8;
    }
    else if (weight < 90) {
        return 11;
    }
    else {
        return 14;
    }
}

export default function Option({ navigation }) {

    const [pseudo, setNom] = useState('');
    const [poids, setPoids] = useState('');
    const objectif = calculWater(poids);
    const nbVerres = 0;

    function handleClick() {
        navigation.navigate('Home');

        const MyUser = { 1: { pseudo, objectif, nbVerres } };
        const MyJson = JSON.stringify(MyUser);
        console.log(MyJson);
        saveDataToLocalStorage('users', MyUser);
    }

    return (
        <ImageBackground source={backImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Comment t'appelles-tu ?</Text>
                    <TextInput style={styles.textInput} onChangeText={setNom} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Quel est ton poids ?</Text>
                    <View style={styles.weightInputContainer}>
                        <TextInput style={styles.weightInput} onChangeText={setPoids} />
                        <Text style={styles.weightUnit}>Kg</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={handleClick}>
                    <Text style={styles.inputLabel}>OK</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
    inputContainer: {
        backgroundColor: '#C80D0D',
        borderWidth: 2,
        borderColor: '#C80D0D',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
    },
    inputLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    weightInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    weightInput: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    weightUnit: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
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
