import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Modal } from 'react-native';
//import userPokemonJson from "./users-pokemons.json";
import Pokemon from "./Pokemon.json";

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


const loadDataFromLocalStorage = (key) => {
    try {
        const jsonString = localStorage.getItem(key);
        if (jsonString) {
            const data = JSON.parse(jsonString);
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erreur lors de la lecture des données du LocalStorage :', error);
        return null;
    }
};
const deleteDataFromLocalStorage = (key, userId) => {
    try {
        // Charger les données existantes du LocalStorage
        const jsonString = localStorage.getItem(key);
        if (jsonString) {
            const data = JSON.parse(jsonString);

            // Supprimer les données de l'utilisateur spécifié
            if (data.hasOwnProperty(userId)) {
                delete data[userId];

                // Enregistrer les données mises à jour dans le LocalStorage
                const updatedJsonString = JSON.stringify(data);
                localStorage.setItem(key, updatedJsonString);

            } else {
                console.log(`Aucune donnée trouvée pour l'utilisateur ${userId} dans le LocalStorage`);
            }
        } else {
            console.log('Aucune donnée trouvée pour cette clé dans le LocalStorage');
        }
    } catch (error) {
        console.error('Erreur lors de la suppression des données du LocalStorage :', error);
    }
};
const deleteAllDataFromLocalStorage = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
    }
};


const myData1 = {
    "1": {
        "pokemons": [
            "006",
            "007",
            "008",
            "009",
            "010",
            "011",
            "012",
            "013",
            "014",
            "015",
            "016",
            "017",
            "018",
            "019",
            "020",
            "021",
            "022",
            "023",
            "024",
            "025",
            "026",
            "027",
            "028",
            "029",
            "030",
            "031",
            "032",
            "033",
            "034",
            "035",
            "036",
            "037",
            "038",
            "039",
            "040",
            "041",
            "042",
            "043",
            "044",
            "045",
            "046",
            "047",
            "048",
            "049",
            "050",
            "051",
            "052",
            "053",
            "054",
            "055",
            "056",
            "057",
            "058",
            "059",
            "060",
            "061",
            "062",
            "063",
            "064",
            "065",
            "066",
            "067",
            "068",
            "069",
            "070",
            "071",
            "072",
            "073",
            "074",
            "075",
            "076",
            "077",
            "078",
            "079",
            "080",
            "081",
            "082",
            "083",
            "084",
            "085",
            "086",
            "087",
            "088",
            "089",
            "090",
            "091",
            "092",
            "093",
            "094",
            "095",
            "096",
            "097",
            "098",
            "099",
            "100",
            "101",
            "102",
            "103",
            "104",
            "105",
            "106",
            "107",
            "108",
            "109",
            "110",
            "111",
            "112",
            "113",
            "114",
            "115",
            "116",
            "117",
            "118",
            "119",
            "120",
            "121",
            "122",
            "123",
            "124",
            "125",
            "126",
            "127",
            "128",
            "129",
            "130",
            "131",
            "132",
            "133",
            "134",
            "135",
            "136",
            "137",
            "138",
            "139",
            "140",
            "141",
            "142",
            "143",
            "144",
            "145",
            "146",
            "147",
            "148",
            "149",
            "150",
            "151",
        ]
    }
};

const myData2 = {
    "1": {
        "pseudo": "Adri-Liotte",
        "objectif": 5,
        "nbVerres": 1
    }
};

//ajouter dans le local storage
//saveDataToLocalStorage('users', myData2);
//saveDataToLocalStorage('usersPokemon', myData1);

// Supprimer les données de l'utilisateur "2"
//deleteDataFromLocalStorage('users', '2');

// Supprimer toutes les données associées à la clé 'users'
//deleteAllDataFromLocalStorage('users');

// Charger les données de l'utilisateur "3" depuis le LocalStorage
const usersFromLocalStorage = loadDataFromLocalStorage('users');
console.log(usersFromLocalStorage, 'usersFromLocalStorage')
const usersPokemonFromLocalStorage = loadDataFromLocalStorage('usersPokemon');
console.log(usersPokemonFromLocalStorage, 'usersPokemonFromLocalStorage')
const userPokemonJson = usersPokemonFromLocalStorage[1];


const user = usersFromLocalStorage[1];
const userPokemon = usersPokemonFromLocalStorage[1];


const capturePokemon = (id) => {
    const userIndex = usersPokemon.findIndex(user => user.id === 1); // trouver l'utilisateur actuel (dans cet exemple, l'utilisateur a l'ID 1)
    if (userIndex >= 0) {
        const user = usersPokemon[userIndex];
        if (!user.pokemons.includes(id)) {
            const updatedUser = { ...user, pokemons: [...user.pokemons, id] }; // ajouter le nouvel ID dans le tableau "pokemons"
            const updatedUsers = [...usersPokemon];
            updatedUsers[userIndex] = updatedUser;
            saveDataToLocalStorage('usersPokemon', updatedUsers); // enregistrer les modifications dans le localStorage
        }
    }
};


export default function Home({ navigation }) {

    const [unlockedPokemonIds, setUnlockedPokemonIds] = useState([]);
    const [isFullMsgCalled, setIsFullMsgCalled] = useState(false);
    const [count, setCount] = useState(user.nbVerres);
    const [progress, setProgress] = useState(0);
    const MAX_PROGRESS = user.objectif;
    const [progressWidth, setProgressWidth] = useState((100 * user.nbVerres) / MAX_PROGRESS + '%');
    const [showModal, setShowModal] = useState(false);
    var pokemonChoisi;

    var valExclus = [];
    valeurExclus();

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

    //ajouter dans le local storage
    function addPokemon() {
        const usersPokemonFromLocalStorage = loadDataFromLocalStorage('usersPokemon');

        var img = pokemonChoisi.image;
        img = img.slice(0, -4);

        console.log("Pokemon ajouté : ", img)

        const userId = "1";
        const newPokemon = img;

        if (usersPokemonFromLocalStorage.hasOwnProperty(userId)) {
            usersPokemonFromLocalStorage[userId].pokemons.push(newPokemon);
        } else {
            usersPokemonFromLocalStorage[userId] = { pokemons: [newPokemon] };
        }
        saveDataToLocalStorage('usersPokemon', usersPokemonFromLocalStorage);

        const updatedUsersPokemonFromLocalStorage = loadDataFromLocalStorage('usersPokemon');


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
        if (pokemonChoisi != null) {
            addPokemon();
            setUnlockedPokemonIds([...unlockedPokemonIds, pokemonChoisi.id]);
        }
        setShowModal(false);
        return;
    }


    function isFullMsg() {

        if (user.nbVerres >= user.objectif && !isFullMsgCalled) {
            var valeurAle = aleatoire(valExclus, 151);
            valExclus.push(valeurAle);
            pokemonChoisi = Pokemon[afficherId(valeurAle)];
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

    function stringListToIntList(strList) {
        return strList.map((str) => parseInt(str));
    }

    function valeurExclus() {
        for (let i = 0; i < userPokemonJson.pokemons.length; i++) {
            if (!unlockedPokemonIds.includes(userPokemonJson.pokemons[i])) {
                valExclus.push(userPokemonJson.pokemons[i]);
            }
        }
        valExclus = stringListToIntList(valExclus);
        return valExclus;
    }



    function aleatoire(exclus, maxTentatives) {
        var valAleatoire, nbTentatives = 0;
        do {
            valAleatoire = Math.floor(Math.random() * 151) + 1;
            nbTentatives++;
            if (nbTentatives >= maxTentatives) {
                throw new Error("Trop de tentatives sans trouver de valeur aléatoire valide");
            }
        } while (exclus.includes(valAleatoire));
        return valAleatoire;
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
