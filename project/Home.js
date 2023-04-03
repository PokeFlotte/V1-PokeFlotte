import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
import users from "./users.json";
import userPokemon from "./users-pokemons.json";
import Pokemon from "./Pokemon.json";

const user = users[1];

export default function Home({ navigation }) {



    const [count, setCount] = useState(user.nbVerres);
    const [progress, setProgress] = useState(0);
    const MAX_PROGRESS = user.objectif;
    const [progressWidth, setProgressWidth] = useState((100 * user.nbVerres) / MAX_PROGRESS + '%');
    const [showModal, setShowModal] = useState(false);

    const handlePress = () => {
        if (count < MAX_PROGRESS) {
            setCount(count + 1);
            user.nbVerres = user.nbVerres + 1;
            const newProgress = user.nbVerres;
            setProgress(newProgress);
            const width = `${(newProgress / MAX_PROGRESS) * 100}%`;
            setProgressWidth(width);
        }
    };

    const showPopup = () => {
        setShowModal(true);
    }

    const handlePressPokeBall = () => {
        showPopup();
    };
    const handlePressPokeDex = () => {
        navigation.navigate('Pokedex');
    };
    const handlePressOption = () => {
        navigation.navigate('Option');
    };
    function isFullImg() {
        if (count === MAX_PROGRESS) {
            return require("../assets/pokeBallFull.png");
        } else {
            return require("../assets/pokeBall.png");
        }
    }
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

    function reset() {

        if (user.nbVerres >= user.objectif) {
            setCount(0);
            user.nbVerres = 0;
            const newProgress = 0;
            setProgress(newProgress);
            const width = `0%`;
            setProgressWidth(width);
        }

        setShowModal(false)
        return;
    }

    function isFullMsg() {
        if (user.nbVerres >= user.objectif) {
            const pokemonChoisi = Pokemon[afficherId(aleatoire(valeurExclus()))];
            return (
                <View>
                    <Text style={styles.popupText}>{`Bravo tu as gagné ${pokemonChoisi.name}!`}</Text>

                    <Image source={require(`./../assets/pokemon/${pokemonChoisi.image}`)} style={styles.popupImage} resizeMode="contain" />

                </View>
            );
        } else {
            return <Text style={styles.popupText}>{`Vous n'avez pas atteint votre objectif. Vous avez bu ${user.nbVerres} verres.`}</Text>;
        }
    }

    function valeurExclus() {
        var valExclus = [];
        for (let i = 0; i < userPokemon['1'].pokemons.length; i++) {
            valExclus.push(userPokemon['1'].pokemons[i]);
        }
        return valExclus;
    }

    function aleatoire(exclus) {
        var valAleatoire = Math.floor(Math.random() * 151) + 1;
        if (exclus.includes(valAleatoire)) {
            aleatoire(exclus);
        } else {
            return valAleatoire;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressPokeBall} style={styles.pokeballContainer}>
                    <Image source={isFullImg()} style={styles.pokeball} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressOption} style={styles.loginContainer}>
                    <Image source={require('../assets/user.png')} style={styles.login} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressPokeDex} style={styles.squareContainer}>
                    <Image source={require('../assets/square.jpg')} style={styles.square} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.text}>J'ai bu !</Text>
            </TouchableOpacity>
            {count === MAX_PROGRESS ? (
                <Text style={styles.counter}>Félicitations, vous avez atteint votre objectif journalier. Vous avez bu {MAX_PROGRESS} verres.</Text>
            ) : (
                <Text style={styles.counter}>Plus que {MAX_PROGRESS - count} verres</Text>
            )}
            <View style={styles.progressContainer}>
                <View style={[styles.progress, { width: progressWidth }]} />
            </View>
            <Text style={styles.counter}>Nombre de verres bus : {user.nbVerres}</Text>

            <Modal visible={showModal} transparent={true}>
                <View style={styles.popup}>
                    <Text style={styles.popupTitle}>Nouveau Pokémon ?</Text>
                    <Text style={styles.popupText}>{isFullMsg()}</Text>
                    <TouchableOpacity onPress={reset} style={styles.popupButton}>
                        <Text style={styles.popupButtonText}>Fermer</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#0CC0DF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '25%',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
    pokeballContainer: {
        backgroundColor: '#fff',
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -50,
    },
    pokeball: {
        width: 80,
        height: 80,
    },
    loginContainer: {
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        right: 15,
    },
    login: {
        width: 60,
        height: 60,
    },
    squareContainer: {
        backgroundColor: '#fff',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 20,
        left: 15,
    },
    square: {
        borderRadius: 10,
        width: 60,
        height: 60,
    },
    button: {
        backgroundColor: '#0CC0DF',
        borderRadius: 50,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: '50%',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    counter: {
        fontSize: 20,
    },
    progressContainer: {
        width: '30%',
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0CC0DF',
    },
    progress: {
        height: '100%',
        borderRadius: 8,
        backgroundColor: '#0CC0DF',
    },
    popup: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,
        alignSelf: "center",
        width: "80%",
        marginTop: "50%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    popupImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    popupTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    popupText: {
        fontSize: 16,
        marginBottom: 20,
    },
    popupButton: {
        backgroundColor: '#0CC0DF',
        borderRadius: 50,
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    popupButtonText: {
        color: '#fff',
        fontSize: 16,
    },

});
