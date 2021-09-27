import React from 'react';
import { Text, View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'

export default function HistoricoInterno() {

    const navigation = useNavigation();

    const pessoa = [

        {
            id: '001',
            desc: ['Patric', '13/02/2021', '14/02/2021']
        },
        {
            id: '002',
            desc: ['Renan', '20/03/2021', '27/03/2021']
        },
        {
            id: '003',
            desc: ['Joao', '20/03/2021', '25/03/2021']
        },
        {
            id: '004',
            desc: ['Mario', '21/03/2021', '22/03/2021']
        },
        {
            id: '005',
            desc: ['Luiz', '21/03/2021', '23/03/2021']
        },
        {
            id: '006',
            desc: ['Luiz', '21/03/2021', '23/03/2021']
        },

    ]

    return (
        <View style={Style.background}>
            <ScrollView>
            <Logo />
            <FlatList
                data={pessoa}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <View style={estilo.item}><Text style={estilo.prod}>Nome: {item.desc[0]}{"\n"}Entrada:{item.desc[1]}{"\n"}Saída: {item.desc[2]}</Text></View>}
            />
            </ScrollView>
        </View>
    )
}

const estilo = StyleSheet.create({
    item: {
        backgroundColor: '#ffff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    prod: {
        fontSize: 20,
        color: '#000',
    },
})
