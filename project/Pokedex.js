import React, { useState } from 'react';
import { ImageBackground, View, TouchableOpacity, Image, Text, StyleSheet, Modal } from 'react-native';
import BACKGROUND_IMAGE_URL from './../assets/back.png';
import PokemonJson from './Pokemon.json';

console.log(PokemonJson["001"].name); // Affiche "Bulbizarre"
console.log(PokemonJson["002"].image); // Affiche "002.png"


const NUM_COLUMNS = 3;
const NUM_ROWS = 50;
const POKEMON_IMAGES = [];
for (let i = 1; i <= NUM_ROWS * NUM_COLUMNS; i++) {
  POKEMON_IMAGES.push({ id: i, imageUrl: require('./../assets/square.jpg') });
}
POKEMON_IMAGES.push({ id: 151, imageUrl: require('./../assets/square.jpg') });

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
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const showPopup = () => {
    setShowModal(true);
  };

  const handlePress = (id) => {
    setSelectedId(id);
    showPopup();
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: BACKGROUND_IMAGE_URL }} style={styles.backgroundImage}>
        <View style={styles.gridContainer}>
          {POKEMON_IMAGES.map((pokemon) => (
            <TouchableOpacity key={pokemon.id} style={styles.gridItem} onPress={() => handlePress(pokemon.id)}>
              <Image source={pokemon.imageUrl} style={styles.pokemonImage} />
              <View style={styles.idContainer}>
                <Text style={styles.idText}># {afficherId(pokemon.id)}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>

      <Modal visible={showModal} transparent={true}>
        <View style={styles.popup}>
          <View style={[styles.popupHeader, { position: 'relative', flexDirection: 'row-reverse', alignItems: 'center' }]}>
            <TouchableOpacity onPress={() => setShowModal(false)} style={styles.popupCloseButton}>
              <Text style={styles.popupCloseButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.popupTitle}>{selectedId && PokemonJson[afficherId(selectedId)] ? PokemonJson[afficherId(selectedId)].name : ''}</Text>
            <Text style={styles.popupId}>#{selectedId ? afficherId(selectedId) : ''}</Text>
            

        </View>
          <View style={styles.popupContent}>
            <Image source={selectedId && PokemonJson[afficherId(selectedId)] && PokemonJson[afficherId(selectedId)].image ? require(`./../assets/pokemon/${PokemonJson[afficherId(selectedId)].image}`) : require('./../assets/square.jpg')} style={styles.popupImage} resizeMode='contain' />
          </View>
          <View style={styles.popupDetails}>
            <View style={styles.popupDetail}>
              <View style={styles.circleBackground}>
                <Text style={styles.detailText}>Plante</Text>
              </View>
            </View>
            <View style={styles.popupDetail}>
              <View style={styles.circleBackground}>
                <Text style={styles.detailText}>Eau</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
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

    popup: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        alignSelf: 'center',
        width: '80%',
        marginTop: '50%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
popupContent: {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
},
  popupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  popupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  popupId: {
    fontSize: 16,
    color: '#999',
  },
popupImage: {
  width: 150,
  height: 150,
  borderRadius: 10,
  marginBottom: 10,
},
  popupDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  popupDetail: {
    marginHorizontal: 5,
  },
  circleBackground: {
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
popupHeader: {
  flexDirection: 'row-reverse',
  alignItems: 'center',
  marginBottom: 10,
  position: 'relative',
  top: 0,
  right: 0,
},
popupCloseButton: {
  backgroundColor: '#DA1331',
  borderRadius: 50,
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
},
popupCloseButtonText: {
  color: '#fff',
  fontSize: 18,
},

});