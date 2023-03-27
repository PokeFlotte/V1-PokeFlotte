import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
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

  return (
    <View style={styles.container}>
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
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    borderColor: 'blue',
  },
  progress: {
    height: '100%',
    borderRadius: 8,
    backgroundColor: 'blue',
  },
});
