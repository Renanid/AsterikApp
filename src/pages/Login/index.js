import React from 'react';
import { Text, View, TextInput, TouchableHighlight, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={Style.background}>
      <View>
        <Logo />
        <View style={Style.container}>

          <TextInput
            style={Style.input}
            placeholder='Login'
          />
          <TextInput
            style={Style.input}
            placeholder='Senha'
            secureTextEntry={true}
          />
          <TouchableHighlight onPress={() => navigation.navigate('RecuperarSenha')}>
            <Text style={Style.textoLink}>Esqueci minha senha</Text>
          </TouchableHighlight>
        </View>
        <View style={Style.botao1} >
          <Button
            title="   Entrar   "
            onPress={() => navigation.navigate('HistoricoInterno')} />

          <Button
            title="Cadastrar"
            onPress={() => navigation.navigate('CadastroCliente')}/>

        </View>
      </View>
    </View>
  );
}
