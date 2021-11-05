import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Contato from './src/pages/Contato';
import Acomodacoes from './src/pages/Acomodacoes';

import api from './src/services/api'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
const icons = {
  Home: {
    name: 'home'
  },
  Contato: {
    name: 'call-outline'
  },
  Acomodacoes: {
    name: 'bed'
  },
 
};
 
function Tabs(){
  return(
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        } 
      }) }
      tabBarOptions={{
        style:{
          backgroundColor: '#121212'
        },
        activeTintColor: '#FFF',
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Acomodacoes" component={Acomodacoes} />
        <Tab.Screen name="Contato" component={Contato} />
        
        
        
      </Tab.Navigator>
  );
}
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Acomodacoes" component={Acomodacoes}/>
        <Stack.Screen name="Contato" component={Contato}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
