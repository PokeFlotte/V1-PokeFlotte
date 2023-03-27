import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const backgroundImage = require('../assets/back.png');

export default function MyPage() {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Comment t'appelles-tu ?</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Quel est votre poids ?</Text>
          <View style={styles.weightInputContainer}>
            <TextInput style={styles.weightInput} />
            <Text style={styles.weightUnit}>Kg</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>start</Text>
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
