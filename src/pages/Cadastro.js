import React from 'react';
import { Text, View, TouchableHighlight, Linking } from 'react-native';
import Style from './assets/style.js'

export default function Cadastro() {

    return (
        <View>
            <TouchableHighlight onPress={() => Linking.openURL('https://asteriskhotel.herokuapp.com')}>
            <Text style={Style.textoLink}>Clicando aqui</Text>
          </TouchableHighlight>
        </View>
    )
}

