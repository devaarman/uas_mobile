import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Beranda = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO...</Text>
      <View>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('PanduanSholat')}>
        <Text Hadist style={styles.buttonText}>Panduan sholat</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('PanduanWudhu')}>
        <Text Hadist style={styles.buttonText}>Panduan Wudhu'</Text>
      </TouchableOpacity>
      </View>
      
      <View>
      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('KumpulanDoa')}>
        <Text Hadist style={styles.buttonText}>Kumpulan Do'a</Text>
      </TouchableOpacity>
      </View>
      
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor :'pink'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9C5757',
    padding: 10,
    borderRadius: 5,
    marginTop : 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Beranda;
