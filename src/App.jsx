import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import beranda from './screens/beranda'
import setelan from './screens/setelan';
import profil from './screens/profil';
import Panduansolat from './route/PanduanSolat';
import PanduanWudhu from './screens/PanduanWudhu';
import KumpulanDoa from './screens/kumpulanDoa';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={beranda} 
      options={{
          tabBarLabel: 'Beranda',
          headerStyle:{
            backgroundColor : '#9C5757',
            color : 'white'
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Setelan" component={setelan} 
      options={{
        headerStyle:{
          backgroundColor : '#9C5757'
        },
          tabBarLabel: 'Setelan',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Profil" component={profil} 
      options={{
        headerStyle:{
          backgroundColor : '#9C5757'
        },
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>

    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: {
          backgroundColor :'#9C5757'
        }
      }}>
        <Stack.Screen name="home" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="PanduanSholat" component={Panduansolat}/>
        <Stack.Screen name="PanduanWudhu" component={PanduanWudhu}/>
        <Stack.Screen name="KumpulanDoa" component={KumpulanDoa}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({})