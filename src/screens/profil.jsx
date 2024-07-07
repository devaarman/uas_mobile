// Import library React dan komponen-komponen yang dibutuhkan dari React Native
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Komponen ProfileScreen
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Foto Profil */}
      <Image
        style={styles.profileImage}
        source={require('../assets/gmbar.png')} // Ganti URL dengan foto profil Anda
      />
      
      {/* Nama Pengguna */}
      <Text style={styles.username}>Deva Arman Ibrahim</Text>
      
      {/* Informasi Tambahan */}
      <Text style={styles.info}>Thank you for using 'MyHijarah' dalam panduan ibadah anda.</Text>
      <Text style={styles.info}>Madura, Indonesia</Text>
    </View>
  );
};

// Stylesheet untuk mengatur tata letak komponen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ADD8E6',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Agar gambar menjadi lingkaran
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 5,
  },
});

export default ProfileScreen;
