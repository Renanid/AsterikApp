import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [nome, setNome] = useState(data?.nome)
  const [data_registro, setData_registro] = useState(data?.data_registro)
 

  const navigation = useNavigation();
 
  async function irHistorico(){
      navigation.navigate('Historico', { id: id, nome: nome, data_registro: data_registro, atualizarLista: funcCarregarTarefas});
  }
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>{nome}</Text>
       
        <Text style={styles.descricao}>{data_registro}</Text>
 
      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  descricao:{
    fontSize: 10,
    padding: 15,
  },
  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "yellow",
    marginVertical: 0,
    marginLeft: 10
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "tomato",
    marginTop: 10,
    marginBottom: 10
  },
});
 
export default Card;
