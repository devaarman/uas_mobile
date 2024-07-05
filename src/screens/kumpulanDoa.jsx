import React from 'react';
import { FlatList, View, Text, StyleSheet, ScrollView } from 'react-native';

const doaSehariHariData = [
    {
      id: '1',
      title: 'Doa Sebelum Makan',
      contentArabic: `بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ`,
      contentTranslation: `Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.`,
    },
    {
      id: '2',
      title: 'Doa Setelah Makan',
      contentArabic: `الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ`,
      contentTranslation: `Segala puji bagi Allah yang memberi kami makan dan minum serta menjadikan kami sebagai orang-orang Muslim.`,
    },
    {
      id: '3',
      title: 'Doa Masuk Masjid',
      contentArabic: `أَعُوذُ بِاللهِ الْعَظِيْمِ وَبِوَجْهِهِ الْكَرِيْمِ وَسُلْطَانِهِ الْقَدِيْمِ مِنَ الشَّيْطَانِ الرَّجِيْمِ`,
      contentTranslation: `Aku berlindung dengan Allah Yang Maha Agung, dengan wajah-Nya yang mulia, dan kekuasaan-Nya yang kekal dari setan yang terkutuk.`,
    },
    {
      id: '4',
      title: 'Doa Keluar Masjid',
      contentArabic: `بِسْمِ اللهِ وَالصَّلاَةُ وَالسَّلاَمُ عَلَى رَسُوْلِ اللهِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ`,
      contentTranslation: `Dengan nama Allah, semoga shalawat dan salam tercurah kepada Rasulullah. Ya Allah, aku memohon dari keutamaan-Mu.`,
    },
    {
      id: '5',
      title: 'Doa Ketika Mendengar Petir',
      contentArabic: `سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيْفَتِهِ`,
      contentTranslation: `Maha suci Allah yang petir bertasbih dengan pujian-Nya dan malaikat-malaikat karena ketakutannya.`,
    },
    {
      id: '6',
      title: 'Doa Ketika Mendengar Hujan',
      contentArabic: `اللَّهُمَّ صَيِّبًا نَافِعًا`,
      contentTranslation: `Ya Allah, hujan yang bermanfaat.`,
    },
    {
      id: '7',
      title: 'Doa Ketika Masuk Kamar Mandi',
      contentArabic: `بِسْمِ اللهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ`,
      contentTranslation: `Dengan nama Allah. Ya Allah, aku berlindung kepada-Mu dari godaan syaitan lelaki dan perempuan.`,
    },
    {
      id: '8',
      title: 'Doa Keluar Kamar Mandi',
      contentArabic: `غُفْرَانَكَ`,
      contentTranslation: `Aku memohon ampunan kepada-Mu.`,
    },
    {
      id: '9',
      title: 'Doa Naik Kendaraan',
      contentArabic: `سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ`,
      contentTranslation: `Maha suci Allah yang telah menundukkan ini untuk kami sedang kami sebelumnya tidak mampu untuk menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami.`,
    },
    {
      id: '10',
      title: 'Doa Ketika Mendengar Adzan',
      contentArabic: `اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِي وَعَدْتَهُ`,
      contentTranslation: `Ya Allah, Tuhan dari panggilan yang sempurna ini dan shalat yang tetap, berikanlah kepada Muhammad wasilah dan kelebihan serta bangkitkan dia pada tempat yang terpuji yang telah Engkau janjikan.`,
    },
    // tambahkan doa sehari-hari lainnya sesuai kebutuhan
  ];
  const KumpulanDoa =() =>{
  return (
    <ScrollView>
    <View style={styles.container}>
    <FlatList
      data={doaSehariHariData}
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

export default KumpulanDoa;
