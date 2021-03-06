import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'


export default function Acomodacoes() {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={Style.background2}>
          <ImageBackground  source={require('../assets/backgroundimage.jpg')} style={{width: 410, height: '100%'}}>
      <View>
        
        <ScrollView>
        <Logo />
        <Text></Text>
        <Text></Text>

        <Text style={Style.textoTitulo}>Quarto Comum</Text>
        <Text></Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={{ height: 300, width: 420, borderRadius:10 }} source={require('../assets/quarto1.jpg')} />
        <Image style={{ height: 300, width: 420, borderRadius:10 }} source={require('../assets/quarto11.jpg')} />
        </ScrollView>
        <Text style={estilo.item}> Com uma cama de casal, ar-condicionado,banheiro com chuveiro a gás, privada, pia, espelho, lâmpada, criado mudo ao lado das camas, frigobar e mesa de jantar, pode ser o quarto perfeito para você. </Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Quarto Luxo</Text>
        <Text></Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={{ height: 300, width: 420, borderRadius:10 }} source={require('../assets/quarto2.jpg')} />
        <Image style={{ height: 300, width: 420, borderRadius:10 }} source={require('../assets/quarto22.jpg')} />
        </ScrollView>
        <Text style={estilo.item}> Ele tem uma cama de casal,ar condicionado, banheiro com chuveiro a gás, hidromassagem tamanho para 2 pessoas, secador de cabelo, criado mudo ao lado da cama, frigobar e  mesa de jantar, para um casal, este é o quarto perfeito, com espaço suficiente para aproveitar. </Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Quarto Presidencial</Text>
        <Text></Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={{ height: 300, width: 420, borderRadius:30 }} source={require('../assets/quarto3.jpg')} />
        <Image style={{ height: 300, width: 420, borderRadius:30 }} source={require('../assets/quarto31.jpg')} />
        </ScrollView>
        <Text style={estilo.item}>  O quarto dos sonhos conta com uma cama QueenSize um pequeno guarda roupa ao lado da cama, painel eletrônico de multimídia ao lado da cama com rádio e entrada PenDrive para músicas, controlador RGB para LEDs no teto a sob a cama, ar condicionado, varanda fechada em vidro, média mesa de jantar,frigobar,  1 jacuzzi para até 4 pessoas, um box de 3m² com dois chuveiros a gás onde as duchas se encontram no meio formando uma forte ducha,lâmpadas RGB para melhor ambientação. Esse com certeza vai fazer seus dias passaram confortavelmente.
 </Text>
        
        
        
        </ScrollView>
        </View>
        </ImageBackground >
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
  item: {
    color:'#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    textAlign: 'justify',
    borderColor:'#000',
    textShadowColor:'#000',
    textShadowOffset:{width: 3, height: 3},
    textShadowRadius:3,
    fontSize: 16,
  },
    prod: {
      fontSize: 20,
      color: '#000',
    },
  
   

})
    