import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'
import Cadastro from '../Cadastro.js'

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.background}>
      <ImageBackground  source={require('../assets/backgroudnimagehotel.jpg')} style={{width: 410, height: '100%'}}> 
      <View>
        <Logo />
        <ScrollView>
        <Text></Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Santos</Text>
        <Text></Text>
        <Image style={{ height: 130, width: '100%' }} source={require('../assets/santos.jpg')} />
        <Text style={estilo.item}>  Santos, uma cidade costeira no estado de São Paulo, no sul do Brasil, é uma importante extensão do porto marítimo que vai do continente à ilha de São Vicente. O centro urbano da ilha faz fronteira com a Baía de Santos, conhecida pela sua extensa praia e pelo jardim adjacente de 5,3 km de comprimento. O Museu do Café, que ocupa uma bolsa de mercadorias de 1922 preservada na zona histórica, explora o papel fundamental da área para o comércio de café do Brasil. </Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Praia do Embaré</Text>
        <Text></Text>
        <Image style={{ height: 130, width: '100%', borderRadius: 90 }} source={require('../assets/praiadoembare.jpg')} />
        <Text></Text>
        <Text style={estilo.item}> A Praia do Embaré tem uma orla super agitada, oferecendo muitas opções de lazer para todas as faixas etárias e espaços para crianças, como um parquinho na praia. Se você quiser curtir a cidade, a Praia de Embaré é uma das melhores praias de Santos. Os inúmeros quiosques na orla e a faixa de areia ampla são um convite a quem deseja passar o dia neste belíssimo lugar.

Os quiosques sempre lotados são garantia de comida fresca e bebida gelada. O tradicional restaurante Vista ao Mar é uma excelente opção para quem quer se deliciar com frutos do mar ou uma paella. Já o Empório Don José tem doces divinos, pães quentinhos e outros quitutes.</Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Ponta da Praia</Text>
        
        <Text></Text>
        <Image style={{ height: 130, width: '100%', borderRadius: 90 }} source={require('../assets/pontadapraia.jpg')} />
        <Text></Text>
        <Text style={estilo.item}>  A Ponta da Praia é uma área bastante tranquila e ampla, em que é possível curtir uma caminhada no calçadão. Além disso, é na Ponta da Praia que fica o Aquário de Santos, um passeio imperdível. A região também é boa para pescaria e, por aqui, ficam o Museu da Pesca e o Museu do Mar.

A Praça Engenheiro José Rebouças possui um complexo com muitas atividades esportivas e um parquinho bem cuidado para as crianças brincarem. Sem contar que há muitas praças arborizadas na região. Quem quiser se arriscar na cozinha, pode aproveitar o Mercado do Peixe, com produtos fresquinhos. Mas há também bons empórios, com um clima bem aconchegante, como o Casa Porto Café.</Text>
        <Text></Text>
        <Text style={Style.textoTitulo}>Praia de Aparecida</Text>
        <Text></Text>
        <Image style={{ height: 130, width: '100%', borderRadius: 90 }} source={require('../assets/praiadeaparecida.jpg')} />
        <Text></Text>
        <Text style={estilo.item}> A Ponta da Praia é uma área bastante tranquila e ampla, em que é possível curtir uma caminhada no calçadão. Além disso, é na Ponta da Praia que fica o Aquário de Santos, um passeio imperdível. A região também é boa para pescaria e, por aqui, ficam o Museu da Pesca e o Museu do Mar.

A Praça Engenheiro José Rebouças possui um complexo com muitas atividades esportivas e um parquinho bem cuidado para as crianças brincarem. Sem contar que há muitas praças arborizadas na região. Quem quiser se arriscar na cozinha, pode aproveitar o Mercado do Peixe, com produtos fresquinhos. Mas há também bons empórios, com um clima bem aconchegante, como o Casa Porto Café. </Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

        </ScrollView>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
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