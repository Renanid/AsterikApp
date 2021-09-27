import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
 
import Login from './src/pages/Login';
import Sobre from './src/pages/Sobre';
import Historico from './src/pages/Historico';
import CadastroCliente from './src/pages/CadastroCliente';
import HistoricoInterno from './src/pages/HistoricoInterno';
import RecuperarSenha from './src/pages/RecuperarSenha';
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
const icons = {
  Login: {
    name: 'person-circle-outline'
  },
  Sobre:{
    name: 'information-outline'
  },
  Historico:{
    name: 'list-circle-outline'
  },
  CadastroCliente: {
    name: 'person-add-outline'
  },
  HistoricoInterno: {
    name: 'list-circle-outline'
  }
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
        <Tab.Screen name="Login" component={Login} />
        {/*<Tab.Screen name="Sobre" component={Sobre} />*/}
       {/*<Tab.Screen name="Historico" component={Historico} />*/}
        <Tab.Screen name="HistoricoInterno" component={HistoricoInterno} />
        <Tab.Screen name="CadastroCliente" component={CadastroCliente} />
        
        
      </Tab.Navigator>
  );
}
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="HistoricoInterno" component={HistoricoInterno}/>
        <Stack.Screen name="CadastroCliente" component={CadastroCliente}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
