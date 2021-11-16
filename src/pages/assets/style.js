import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from 'react';

export default StyleSheet.create({
    background:{
        flex:1
    },
    background2:{
        flex:1
    },

    container:{
        justifyContent: 'center',//alinhamento horizontal
        alignItems: 'center', //alinhamento vertical
        height: 130,

    },
    textoPadrao:{
        color:'#000000',
        fontSize:16,
        
    },
    textoLink:{
        color:'#277ED8',
        fontSize:16,
      

    },
    textoTitulo:{
        color:'#fff',
        fontSize:28,
        textAlign:'center',
        borderColor:'#000',
        textShadowColor:'#000',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:3,
      
        
    },
    logo:{
        width:120,
        resizeMode:'contain',
    },
    botao1:{
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        padding: 10,
    },
    input:{
        height: 40,
        borderWidth: 1,
        borderColor: '#000',
        margin: 10,
        fontSize: 16,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        
      },
      cadastro:{
        alignItems: 'center',
      },
      
  
})