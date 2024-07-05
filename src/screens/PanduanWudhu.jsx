import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';

const panduanWudhuData = [
  {
    id: '1',
    title: 'Niat Wudhu',
    contentArabic: `نَوَيْتُ الْوُضُوءَ لِلَّهِ تَعَالَى`,
    contentTranslation: `Aku niat wudhu karena Allah Ta'ala`,
  },
  {
    id: '2',
    title: 'Membasuh Tangan',
    contentArabic: `بِسْمِ اللَّهِ`,
    contentTranslation: `Dengan menyebut nama Allah`,
  },
  {
    id: '3',
    title: 'Membasuh Wajah',
    contentArabic: `اللَّهُمَّ بَيِّضْ وَجْهِي يَوْمَ تَبْيَضُّ وُجُوهٌ وَتَسْوَدُّ وُجُوهٌ`,
    contentTranslation: `Ya Allah, putihkanlah wajahku pada hari wajah-wajah menjadi putih dan wajah-wajah menjadi hitam`,
  },
  {
    id: '4',
    title: 'Membasuh Tangan Kanan',
    contentArabic: `اللَّهُمَّ طَهِّرْ يَدَيَّ مِنَ الذُّنُوبِ وَفَقِّرْ يَدَيَّ إِلَى الصَّدَقَةِ`,
    contentTranslation: `Ya Allah, sucikanlah tangan-tanganku dari dosa dan miskinkanlah tangan-tanganku kepada sedekah`,
  },
  {
    id: '5',
    title: 'Membasuh Kepala',
    contentArabic: `اللَّهُمَّ بَارِكْ لِي فِي رَأْسِي وَطَهِّرْهُ مِنَ الذُّنُوبِ`,
    contentTranslation: `Ya Allah, berkatilah kepalaku dan sucikanlah dari dosa-dosa`,
  },
  {
    id: '6',
    title: 'Membasuh Kaki',
    contentArabic: `اللَّهُمَّ أَثْبِتْ قَدَمَيَّ عَلَى الصِّرَاطِ يَوْمَ تَزِلُّ فِيهِ الْأَقْدَامُ`,
    contentTranslation: `Ya Allah, tetapkanlah kakiku di atas jalan pada hari di mana kaki-kaki akan tergelincir`,
  },
  // tambahkan langkah-langkah wudhu lainnya sesuai kebutuhan
];
const PanduanWudhu =() =>{
  return (
    <ScrollView>
    <View style={styles.container}>
    <FlatList
      data={panduanWudhuData}
      renderItem={({item})=>(
    <View>
    <Text style={styles.text1}>{item.id}</Text>
    <Text style={styles.text}>{item.title}</Text>
    <Text style={styles.text}>{item.contentArabic}</Text>
    <Text style={styles.text}>{item.contentTranslation}</Text>
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

export default PanduanWudhu;
