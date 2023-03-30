import React from 'react';
import { ImageBackground, View, Image, Text, StyleSheet } from 'react-native';
import BACKGROUND_IMAGE_URL from "./../assets/back.png";

const NUM_COLUMNS = 3;
const NUM_ROWS = 50;
const POKEMON_IMAGES = [];
for (let i = 1; i <= NUM_ROWS * NUM_COLUMNS; i++) {
    POKEMON_IMAGES.push({ id: i, imageUrl: require('../assets/square.jpg') });
}
POKEMON_IMAGES.push({ id: 151, imageUrl: require('../assets/square.jpg') });

function afficherId(id) {
    const idStr = id.toString(); // Convertir l'ID en chaîne de caractères
    if (idStr.length === 1) {
        return `00${idStr}`;
    }
    if (idStr.length === 2) {
        return `0${idStr}`;
    }
    return idStr;
}


export default function Pokedex() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: BACKGROUND_IMAGE_URL }}
                style={styles.backgroundImage}
            >
                <View style={styles.gridContainer}>
                    {POKEMON_IMAGES.map(pokemon => (
                        <View key={pokemon.id} style={styles.gridItem}>
                            <Image
                                source={pokemon.imageUrl}
                                style={styles.pokemonImage}
                            />
                            <View style={styles.idContainer}>
                                <Text style={styles.idText}># {afficherId(pokemon.id)}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20,
        width: '100%',
    },
    gridItem: {
        width: '30%',
        aspectRatio: 1,
        margin: '1.5%',
    },
    pokemonImage: {
        width: '100%',
        height: '60%',
        resizeMode: 'contain',
    }, idContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5,
    },
    idText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

