import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, TextInput, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/logo.js'
import Home from '../Home/index'



export default function Login() {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Logo />
        <ScrollView>
          <TextInput
          style={estilo.input}
          placeholder="  E-mail"
          />
          <TextInput
          style={estilo.input}
          placeholder="  Senha"
          />
          <View style={estilo.fixToText}>
            <Button
            title="Entrar"
            onPress={ () => this.props.navigation.navigate('Home')}
            />
            <Button
            title="Cadastro"
            onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  
  input:{
    height: 40,
    borderWidth: 1,
    borderColor:'#010100',
    backgroundColor:'#fff',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,

  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 70,
    marginVertical: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5F851',
  },
})