import React, { useState } from 'react';
import { View, Button, Alert, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style.js'
import Logo from '../assets/logo.js'



export default function CadastroCliente() {

    const navigation = useNavigation();

    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [sexo, setSexo] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cep, setCep] = useState('')
    const [pais, setPais] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [endereco, setEndereco] = useState('')
    const [senha, setSenha] = useState('')
    const [senhaRep, setSenhaRep] = useState('')

    return (
        <View style={Style.background}>
            <ScrollView>
            <Logo />
            <View style={Style.cadastro}>
                <TextInput
                    style={Style.input}
                    placeholder='Nome *'
                    value={nome}
                    onChangeText={text => setNome(text)}
                    autoCapitalize='words'
                />
                <TextInput
                    style={Style.input}
                    placeholder='Data de Nascimento *'
                    value={nascimento}
                    onChangeText={text => setNascimento(text)}
                />
                <TextInput
                    style={Style.input}
                    placeholder='Sexo *'
                    value={sexo}
                    onChangeText={text => setSexo(text)}
                    autoCapitalize='words'
                />
                <TextInput
                    style={Style.input}
                    placeholder='CPF *'
                    value={cpf}
                    onChangeText={text => setCpf(text)}
                />
                <TextInput
                    style={Style.input}
                    placeholder='Email *'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={Style.input}
                    placeholder='Telefone *'
                    value={telefone}
                    onChangeText={text => setTelefone(text)}
                />
                <TextInput
                    style={Style.input}
                    placeholder='CEP *'
                    value={cep}
                    onChangeText={text => setCep(text)}
                />
                <TextInput
                    style={Style.input}
                    placeholder='País'
                    value={pais}
                    onChangeText={text => setPais(text)}
                    autoCapitalize='words'
                />
                <TextInput
                    style={Style.input}
                    placeholder='Cidade'
                    value={cidade}
                    onChangeText={text => setCidade(text)}
                    autoCapitalize='words'
                />
                <TextInput
                    style={Style.input}
                    placeholder='Estado'
                    value={estado}
                    onChangeText={text => setEstado(text)}
                    autoCapitalize='words'
                />
                <TextInput
                    style={Style.input}
                    placeholder='Endereço'
                    value={endereco}
                    onChangeText={text => setEndereco(text)}
                    autoCapitalize='words'
                />
                <TextInput
                    style={Style.input}
                    placeholder='Senha *'
                    value={senha}
                    onChangeText={text => setSenha(text)}
                    secureTextEntry={true}
                />
                <TextInput
                    style={Style.input}
                    placeholder='Repetir Senha *'
                    value={senhaRep}
                    onChangeText={text => setSenhaRep(text)}
                    secureTextEntry={true}
                />
            </View>
            <View style={Style.botao1}>
                <Button
                    title="    Salvar    "
                    onPress={() => navigation.navigate('Login')}
                />
                <Button
                    title="    Cancelar    "
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
            </ScrollView>
        </View>
    );
};