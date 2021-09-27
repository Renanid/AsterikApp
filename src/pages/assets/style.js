import { StyleSheet } from 'react-native';
import React from 'react';

export default StyleSheet.create({
    background:{
        backgroundColor:'#F7F153',
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
        color:'#f00',
        fontSize:14,
        marginRight:165,
        padding: 1,

    },
    textoTitulo:{
        color:'#000000',
        fontSize:22,
        textAlign:'center'
        
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