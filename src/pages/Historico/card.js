import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from './api';
import { useNavigation } from '@react-navigation/native';
 
function Card({data, funcCarregarHistorico}){
  const [id, setId] = useState(data?.id)
  const [nome, setNome] = useState(data?.nome)
  const [data_registro, setData_registro] = useState(data?.data_registro)

 

  const navigation = useNavigation();
 
  async function irHistorico(){
      navigation.navigate('Historico', { id: id, nome: nome, data_registro: data_registro, atualizarLista: funcCarregarHistorico});
  }
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.nome}>{nome}</Text>
       
        <Text style={styles.data}>{data_registro}</Text>
 
      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    backgroundColor: '#ffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    textAlign: 'left'
  },
  nome:{
    fontSize: 18,
    padding: 15,
  },
  data:{
    fontSize: 16,
    padding: 10,
  },
});
 
export default Card;
