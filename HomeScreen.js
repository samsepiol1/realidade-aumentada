import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const HomeScreen = () => {
  const handleButtonClick = () => {
    const url = 'https://astroflow.vercel.app/politick.html'; // URL que deseja redirecionar
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BioAR</Text>
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Adiciona sombra ao botão
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default HomeScreen;