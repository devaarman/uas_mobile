import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/gmbar.png')} // Ganti dengan path atau URL logo Anda
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
        "MyHijrah" merupakan situs internet yang khusus untuk menampilkan panduan Sholat, Wudhu', dan kumpulan Do'a. Karena kebutuhan manusia semakin meningkat dan juga ilmu pengetahuan semakin dibutuhkan, maka banyak orang mengunjungi situs ini. 'MyHijrah' mudah diakses, praktis, dan cepat.
        </Text>
        
        <Text style={styles.info}>
          Email: ibrahimdeva77@gmail.com
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300, // Sesuaikan ukuran logo sesuai kebutuhan
    height: 300, // Sesuaikan ukuran logo sesuai kebutuhan
  },
  content: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
