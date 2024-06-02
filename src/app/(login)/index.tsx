import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import Icon from 'react-native-vector-icons/AntDesign'
import { router } from 'expo-router';

export interface TelaLoginProps {
}

export default function TelaLogin(props: TelaLoginProps) {
    
    //VARIAVEIS
    const confirmAlert = () =>
        Alert.alert('Confirmação!', 'Deseja Realmente Trocar de Conta?', [
            {
                text: 'SIM',
                onPress: () => console.log('Ação Selecionada: SIM'),
                style: 'cancel',
            },
            { text: 'NÃO', onPress: () => console.log('Ação Selecionada: NÃO') },
        ]);

    const alterarSenha = () =>
        Alert.alert('Confirmação!', 'Deseja Alterar Sua Senha?', [
            {
                text: 'SIM',
                onPress: () => console.log('Alterar Senha: SIM'),
                style: 'cancel',
            },
            { text: 'NÃO', onPress: () => console.log('Alterar Senha: NÃO') },
        ]);

    const login = () => {
        Alert.alert('Login!', 'Login Realizado com Sucesso!', [
            {
                onPress: () => console.log('Login Realizado com Sucesso!')
            }
        ]);
        router.replace('/inicio')
    }

    const [nome, setNome] = React.useState('Rafael Rodrigues');
    const [cpf, setCpf] = React.useState('***.613.334-**');
    const [senha, setSenha] = React.useState('');


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.texto}>
                <Text style={{ marginBottom: 15, fontWeight: 'bold' }}>Login:</Text>
           
                <TextInput style={styles.credenciais} onChangeText={(texto) => setNome(String(texto))} placeholder='Digite seu nome' >{nome}</TextInput>           
                <TextInput style={styles.credenciais} onChangeText={(texto) => setCpf(String(texto))} placeholder='Digite Seu Cpf' >{cpf}</TextInput>
        
                <View style={styles.botao}>
                    <Button title={'Trocar Conta'} onPress={confirmAlert} color={'#000'} />
                </View>
            </View>

            <View style={styles.containersenha}>   
                <TextInput style={styles.input} onChangeText={(texto) => setSenha(String(texto))} placeholder='Digite Sua Senha' secureTextEntry={true}>{senha}</TextInput>
              
                <Text style={{ left: 25 }}>__________________________</Text>
                <Icon style={styles.icon} name="lock" size={22} color='#000' />

                <View style={styles.botaoSenha}>
                    <Button onPress={alterarSenha} title='Esqueci' color={'#000'}></Button>
                </View>


            </View>

            <TouchableOpacity style={styles.botaoLogin} onPress={login} >
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: 3 }} >
                    ACESSAR
                </Text>
            </TouchableOpacity>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'


    },
    logo: {
        width: 130,
        height: 120,

    },
    texto: {
        justifyContent: 'space-around',
        backgroundColor: '#BDF8E2',
        width: 315,
        height: 88,
        fontSize: 14,
        marginTop: 50,
        borderRadius: 15,
        shadowOpacity: 0.5



    },
    credenciais: {
        alignItems: 'flex-start',
        marginTop: 50,
        marginLeft: 20,
        fontSize: 15,
        width: 130,
        height: 25,
        borderRadius: 10,
        shadowOpacity: 0.3,
   
    },
    botao: {
        alignItems: 'flex-end',
        marginBottom: 50,
        marginRight: 10,
        shadowOpacity: 0.3,
    },
    containersenha: {
        justifyContent: 'space-around',
        shadowOpacity: 0.2,
        width: 315,
        height: 60,
        fontSize: 14,
        marginTop: 15,
        borderRadius: 15,




    },
    input: {
        height: 45,
        width: 135,
        fontSize: 14,
        marginTop: 14,
        marginLeft: 25,
        borderRadius: 15,
  

    },

    icon: {
        position: 'absolute',
        top: 15
    },
    botaoSenha: {
        alignItems: 'flex-end',
        marginRight: 10,
        bottom: 15,
    },
    botaoLogin: {
        marginTop: 35,
        backgroundColor: '#BDF8E2',
        alignItems: 'center',
        shadowOpacity: 0.3,
        borderRadius: 15,
        width: 260,
        height: 40,
        fontWeight: 'bold'

    }


});