import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'
import Cadastro from '../Cadastro.js'

export default function Historico() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.background}>
      <View>
        <Logo />
        <ScrollView>
            <Text>Olá Historico</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  item: {
    backgroundColor: '#ffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    textAlign: 'left'



  },
  prod: {
    fontSize: 20,
    color: '#000',
  },
})