import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BurningProcScreen = () => {
  const [burnProcedures, setBurnProcedures] = useState([]);

  useEffect(() => {
    const loadBurnProcedures = async () => {
      try {
        const storedProcedures = await AsyncStorage.getItem('firstDegreeBurnProcedures');
        if (storedProcedures) {
          setBurnProcedures(JSON.parse(storedProcedures));
        } else {
          const initialProcedures = [
            {
              id: '1',
              image: require('./assets/heart_image.jpg'), // Adicione a referência da imagem
            },
          ];
          setBurnProcedures(initialProcedures);
          await AsyncStorage.setItem('firstDegreeBurnProcedures', JSON.stringify(initialProcedures));
        }
      } catch (error) {
        console.error('Error loading first-degree burn procedures from AsyncStorage:', error);
      }
    };

    loadBurnProcedures();
  }, []);

 

  return (
    <View style={styles.container}>
      <Text>Modelos Disponíveis</Text>

      <FlatList
        data={burnProcedures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.procedureItem}>
            <Text style={styles.title}>{item.title}</Text>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />

    
    </View>
  );
};

const styles = StyleSheet.create({
 

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
  addButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#D04936',
    borderRadius: 5,
  },

  image: {
    width: 400, // Ajuste conforme necessário
    height: 500, // Ajuste conforme necessário
    marginBottom: 10,
    resizeMode: 'cover', // Ajuste conforme necessário
    borderRadius: 5, // Adicione bordas arredondadas conforme necessário
  },

  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BurningProcScreen;
