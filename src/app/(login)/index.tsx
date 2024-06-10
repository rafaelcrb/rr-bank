import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import Icon from 'react-native-vector-icons/AntDesign'
import { router } from 'expo-router';
import { Formik } from "formik";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { doc, setDoc, getFirestore } from '@firebase/firestore';
import { db } from '../config/firebase';

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

    const handleLogin = async ({ email, senha }: any) => {

        await signInWithEmailAndPassword(auth, email, senha)
            .then(usuario => router.replace('/inicio'))
            .catch(erro => Alert.alert('Erro', 'Login ou senha incorreta!'));
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />

            <View style={styles.container2}>
                <Formik
                    initialValues={{ email: '', senha: '' }}
                    onSubmit={handleLogin}
                >
                    {({ handleChange, handleSubmit, isSubmitting }) => (
                        <>
                            <Text style={{ marginBottom: 15, fontWeight: 'bold' }}>Login:</Text>

                            <View style={styles.texto}>
                                <TextInput onChangeText={handleChange('email')} style={[styles.input2, styles.borderBottom]} placeholder="EMAIL:" />
                                <TextInput onChangeText={handleChange('senha')} style={styles.input2} secureTextEntry placeholder="SENHA:" />

                                <View style={styles.botao}>
                                    <Button title={'Trocar Conta'} onPress={confirmAlert} color={'#000'} />
                                </View>

                                

                            </View>
                            {/* <View style={styles.botaoSenha}>
                                <Button onPress={alterarSenha} title='Esqueci minha senha' color={'#000'}></Button>
                            </View> */}

                            <TouchableOpacity style={styles.botaoLogin} onPress={() => handleSubmit()} disabled={isSubmitting} >
                                <Text style={{ fontSize: 22, fontWeight: 'bold', top: 3, }} >
                                    ACESSAR
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>

                <TouchableOpacity onPress={() => router.push('/cadastro')}>
                    <Text style={styles.cadastro}>Não possui conta? </Text>
                    <Text  style={styles.cadastro}> Clique-aqui para se cadastrar!</Text>
                </TouchableOpacity>

            </View>


           
         
              
                

         

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
        padding: 8,
        backgroundColor: '#BDF8E2',
        width: 315,
        height: 70,
        fontSize: 14,
        borderRadius: 15,
        shadowOpacity: 0.2



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
        position: 'absolute',
        alignItems: 'flex-end',
        top: 15,
        right: 5,
        shadowOpacity: 0.2,
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
        marginTop: 15,
        alignItems: 'flex-end',
        marginRight: 10,
        bottom: 15,
    },
    botaoLogin: {
        alignSelf: 'center',
        marginTop: 35,
        marginBottom: 20,
        backgroundColor: '#BDF8E2',
        alignItems: 'center',
        shadowOpacity: 0.2,
        borderRadius: 15,
        width: 200,
        height: 40,
        fontWeight: 'bold'
    },
    header: {

        fontSize: 20,
        textAlign: 'center'
    },
    input2: {
       
        padding: 5
    },
    borderBottom: {
        width: 150,
        borderBottomColor: 'black',
        borderBottomWidth: 1.5
    },
    cadastro: {
        alignItems: 'center',
        
        fontSize: 15,
        textAlign: 'center'
    },
    container2: {
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 20
    },

});