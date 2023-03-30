import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Home() {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(0);
    const MAX_PROGRESS = 5;
    const [progressWidth, setProgressWidth] = useState('0%');

    const handlePress = () => {
        if (count < MAX_PROGRESS) {
            setCount(count + 1);
            const newProgress = progress + 1;
            setProgress(newProgress);
            const width = `${(newProgress / MAX_PROGRESS) * 100}%`;
            setProgressWidth(width);
        }
    };

    const handlePressPokeBall = () => {
        console.log('clicked, pokeball');
        navigation.navigate('Option');

    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handlePressPokeBall} style={styles.pokeballContainer}>
                    <Image source={require('../assets/pokeBall.png')} style={styles.pokeball} />
                </TouchableOpacity>
                <View style={styles.loginContainer}>
                    <Image source={require('../assets/user.png')} style={styles.login} />
                </View>
                <View style={styles.squareContainer}>
                    <Image source={require('../assets/square.jpg')} style={styles.square} />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.text}>J'ai bu!</Text>
            </TouchableOpacity>
            {count === MAX_PROGRESS ? (
                <Text style={styles.counter}>Félicitations, vous avez atteint votre objectif journalier. Vous avez bu {MAX_PROGRESS} verres.</Text>
            ) : (
                <Text style={styles.counter}>Plus que {MAX_PROGRESS - count} verres</Text>
            )}
            <View style={styles.progressContainer}>
                <View style={[styles.progress, { width: progressWidth }]} />
            </View>
            <Text style={styles.counter}>Nombre de clics: {count}</Text>
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
});
