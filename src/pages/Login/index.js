import React, {Component, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Logo from '../assets/logo.js'
import usuarioService from './login.js';

export default function Login() {
  const navigation = useNavigation();
  
  function irHome(){
    navigation.navigate('Home');
}
function irContato(){
  navigation.navigate('Contato');
}
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const entrar = () => {

    let data = {
      email: email,
      senha: senha
    }
    usuarioService.login(data)
    .then((response) => {
      setLoading(false)
      navigation.reset({
        routes: {irHome}
      })
    })
    .catch((error) => {
      setLoading(false)
      Alert.alert("Usuário não existe")
    })
  }

  return (
    <SafeAreaView style={estilo.container}>
      <View>
        <Logo />
        <ScrollView>
          <TextInput
          style={estilo.input}
          onChangeText={value => setEmail(value)}
          placeholder="  E-mail"
          keyboardType="email-address"
          />
          <TextInput
          style={estilo.input}
          placeholder="  Senha"
          onChangeText={value => setSenha(value)}
          secureTextEntry = {true}
          />
          <View style={estilo.fixToText}>
           { isLoading && 
            <ActivityIndicator />
          }
          { !isLoading && 
            <Button 
              icon={
                <Icon
                  name="check"
                  size={15}
                  color="white"
                />
              }
              title="Entrar"
              onPress={() => entrar()}
            />
          }
            <Button
              
              title="Cadastro"
              onPress={irContato}
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
    marginHorizontal: 100,
    marginVertical: 20,

    
  },
  container: {
    flex: 1,
    backgroundColor: '#E5F851',
  },
})