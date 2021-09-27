import React from 'react';
import { View, Button, Alert, TextInput, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'

export default function RecuperarSenha() {
    const navigation = useNavigation();
    return (
        <View style={Style.background}>

            <Logo />


            <View style={Style.botao1} >

                <TextInput
                    style={Style.input}
                    placeholder='Email'
                />
                <Button
                    title="    Enviar    "
                    onPress={() => Alert.alert('Mensagem', 'Sua senha foi enviada por email ')}
                />
            </View>
        </View>
    );
};
