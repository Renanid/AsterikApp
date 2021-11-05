import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'
import Cadastro from '../Cadastro.js'

export default function Acomodacoes() {

    const navigation = useNavigation();


    return (
        <SafeAreaView style={Style.background2}>
          <ImageBackground  source={require('../assets/backgroundimage.jpg')} style={{width: 410, height: '100%'}}>
      <View>
        <Logo />
        <ScrollView>
        <Text></Text>
        <Text></Text>

        <Text style={Style.textoTitulo}>Quarto Comum</Text>
        <Text></Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={{ height: 300, width: 410, borderRadius:10 }} source={require('../assets/quarto1.png')} />
        <Image style={{ height: 300, width: 410, borderRadius:10 }} source={require('../assets/quarto11.jpg')} />
        </ScrollView>
        <Text style={estilo.item}>  Com uma de casal, ar-condicionado,banheiro com chuveiro a gás, privada, pia, espelho, lâmpada, criado mudo ao lado das camas, frigobar e mesa de jantar, pode ser o quarto perfeito para você. </Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Quarto Luxo</Text>
        <Text></Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={{ height: 300, width: 400, borderRadius:10 }} source={require('../assets/quarto2.jpg')} />
        <Image style={{ height: 300, width: 400, borderRadius:10 }} source={require('../assets/quarto22.jpg')} />
        </ScrollView>
        <Text style={estilo.item}> Ele tem uma de casal,ar condicionado, banheiro com chuveiro a gás, hidromassagem tamanho para 2 pessoas, secador de cabelo, criado mudo ao lado da cama, frigobar e  mesa de jantar, para um casal, este é o quarto perfeito, com espaço suficiente para aproveitar. </Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Quarto Presidencial</Text>
        <Text></Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image style={{ height: 300, width: 400, borderRadius:10 }} source={require('../assets/quarto3.jpg')} />
        <Image style={{ height: 300, width: 400, borderRadius:10 }} source={require('../assets/quarto31.jpg')} />
        </ScrollView>
        <Text style={estilo.item}>  O quarto dos sonhos conta com uma cama QueenSize um pequeno guarda roupa ao lado da cama, painel eletrônico de multimídia ao lado da cama com rádio e entrada PenDrive para músicas, controlador RGB para LEDs no teto a sob a cama, ar condicionado, varanda fechada em vidro, média mesa de jantar,frigobar,  1 jacuzzi para até 4 pessoas, um box de 3m² com dois chuveiros a gás onde as duchas se encontram no meio formando uma forte ducha,lâmpadas RGB para melhor ambientação. Esse com certeza vai fazer seus dias passaram confortavelmente.
 </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        
        </ScrollView>
        </View>
        </ImageBackground >
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    item: {
      backgroundColor: '#ffff',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 10,
      textAlign: 'left'
  
  
  
    },
    prod: {
      fontSize: 20,
      color: '#000',
    },
  
   

})
    