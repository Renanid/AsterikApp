import React, {Component, useEffect, useState} from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList, View, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/logo.js'
import api from './api';
import Card from './card';


export default function Historico() {

  const [historico, setHistorico] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(async () => {
    await carregarHistorico()
    setLoading(false)
  }, [])
 
  const carregarHistorico = async () => {
    const response = await api.get('/checks')
    setHistorico(response.data)
  }

  const navigation = useNavigation();

  async function irHistorico(){
    navigation.navigate('Historico', {atualizarLista: carregarHistorico});
}

if(loading){
  return(
    <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
      <ActivityIndicator color="#09A6FF" size={40}/>
    </View>
  )
}else{
  return(

    <View style={styles.container}>
      
      <Logo/>
     
      <Text/>
      <Text/>
        <FlatList
        data={historico}
        keyExtractor={item => item.id.toString() }
        renderItem={ ({item}) => <Card data={item} funcCarregarHistorico={carregarHistorico} /> }
        />
    
    </View>
  );
}
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
container: {
    flex: 1,
    backgroundColor: '#E5F851',
}
});

























//   const [people, setPeople] = useState([
//     { data: '10/11/2021', id: '1'},
//     { data: '10/11/2021', id: '2'},
//     { data: '10/11/2021', id: '3'},
//     { data: '10/11/2021', id: '4'},
//     { data: '10/11/2021', id: '5'},
//     { data: '10/11/2021', id: '6'},
//     { data: '10/11/2021', id: '7'},
//     { data: '10/11/2021', id: '8'},
//     { data: '10/11/2021', id: '9'},
//     { data: '10/11/2021', id: '10'},
//     { data: '10/11/2021', id: '11'},
//     { data: '10/11/2021', id: '12'},
//     { data: '10/11/2021', id: '13'},
//     { data: '10/11/2021', id: '14'},

//   ])

//   return (
//     <SafeAreaView style={estilo.container}>
//       <Logo/>
//       <FlatList
        
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//             <Text style={estilo.text}>  Data:{item.data}  </Text>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const estilo = StyleSheet.create({
  
//   text:{
//     height: 40,
//     borderWidth: 1,
//     borderColor:'#010100',
//     backgroundColor:'#fff',
//     marginTop: 10,
//     marginLeft: 10,
//     marginRight: 10,
//     textAlignVertical: 'center'

//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#E5F851',
//   },
// })