import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';

const dataLangkahSolat = [
  { id: '1', nama: 'Niat', bacaan: 'نَوَيْتُ اُصَلِّيْ فَرْضَ الصَّلَاةِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْكَعْبَةِ لِلَّهِ تَعَالَى' },
  { id: '2', nama: 'Doa Iftitah', bacaan: 'اللَّهُمَّ بَاعِدْ بَيْنِيْ وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِيْ مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْنِيْ مِنْ خَطَايَايَ بِالثَّلْجِ وَالمَاءِ وَالْبَرَدِ' },
  { id: '3', nama: 'Al-Fatihah', bacaan: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِيْنَ\nالرَّحْمَنِ الرَّحِيْمِ\nمَالِكِ يَوْمِ الدِّيْنِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِيْنُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ\nصِرَاطَ الَّذِيْنَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّالِّيْنَ' },
  { id: '4', nama: 'Ruku', bacaan: 'سُبْحَانَ رَبِّيَ الْعَظِيْمِ' },
  { id: '5', nama: 'Sujud', bacaan: 'سُبْحَانَ رَبِّيَ الأَعْلَى' },
  { id: '6', nama: 'Duduk di Antara Dua Sujud', bacaan: 'رَبِّ اغْفِرْ لِيْ، رَبِّ اغْفِرْ لِيْ' },
  { id: '7', nama: 'Tasyahud Akhir', bacaan: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ\nالسَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ\nالسَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِيْنَ\nأَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ' },
  { id: '8', nama: 'Salam', bacaan: 'السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ' },
];
const PanduanSholat =() =>{
  return (
    
    <ScrollView style={styles.container}>
      <View>
    <FlatList
      data={dataLangkahSolat}
      renderItem={({item})=>(
    <View>
    <Text style={styles.text1}>{item.id}</Text>
    <Text style={styles.text}>{item.nama}</Text>
    <Text style={styles.text}>{item.bacaan}</Text>
    </View>
    )}
    />
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
     backgroundColor :'#B0C4DE'
  },
  text: {
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize : 20,
    color :'black'
  },
  text1: {
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize : 20,
    textAlign :'center',
    borderWidth :1,
    borderColor : '#9C5757',
    color : 'black',
  },
 
});

export default PanduanSholat;
