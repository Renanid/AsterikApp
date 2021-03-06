import React from 'react';
import { Text, View, StyleSheet,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'
import Cadastro from '../Cadastro.js'

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={Style.background}>
      <ImageBackground  source={{ uri: 'https://www.santos.sp.gov.br/static/files_www/field/image/bg-jose.jpg'}} style={{width: 410, height: '100%'}}>
      <View>
        <Logo />
        <Text style={estilo.item}>Já ficou encantado ? Você pode se cadastrar pelo site e fazer sua reserva <Cadastro/> </Text>
        <Text style={estilo.item}>Também pode ser pelo telefone: 13 99999-0000 </Text>
      </View>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  item: {
      backgroundColor: '#ffff',
      padding: 15,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      
      
  },
  prod: {
      fontSize: 20,
      
  },
})