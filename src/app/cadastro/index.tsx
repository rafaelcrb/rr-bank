import { Formik } from "formik";
import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from "react-native";
import * as Yup from 'yup';
import { auth, db } from "../config/firebase";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import logo from './../../../assets/imgs/Logo_RRBank.png'



export default function CadastroScreen() {
    //Função do cadastro de usuário
    const handleCadastro = async ({ email, senha, nome, cpf, contato }: any) => {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then(async (usuario) => {
                await setDoc(doc(db, 'usuarios', usuario.user.uid), {
                    email, nome, cpf, contato
                });
                router.back()
            })
            .catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário, tente novamente'))
    }


    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Cadastro</Text>
            </View>
            <Text style={{ fontSize: 20 }}>Crie sua conta</Text>
            <Formik
                initialValues={{ email: '', senha: '', nome: '', contato: '', cpf: '' }}
                onSubmit={handleCadastro}
                validationSchema={Yup.object({
                    email: Yup.string().required('O campo email precisa existir').email('O campo precisa ser um email'),
                    nome: Yup.string().required('O campo nome precisa existir'),
                    cpf: Yup.number().required('O campo cpf precisa ser informado').min(11, 'O campo senha precisa ter no mínimo 11 caracteres'),
                    contato: Yup.number().required('O campo contato precisa ser informado').positive('O valor precisa ser um número positivo'),
                    senha: Yup.string().required('O campo senha precisa existir').min(6, 'O campo senha precisa ter no mínimo 6 caracteres')
                })}
            >
                {({ handleChange, errors, touched, handleBlur, isSubmitting, handleSubmit }) => (
                    <View style={{ marginTop: 20 }}>
                       
                        <Text>Nome: </Text>
                        <TextInput onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} style={styles.input} />
                        {touched.nome && errors.nome && <Text style={styles.erro}>{errors.nome}</Text>}
                      
                        <Text>Cpf: </Text>
                        <TextInput onChangeText={handleChange('cpf')} onBlur={handleBlur('cpf')} keyboardType="decimal-pad"  style={styles.input} />
                        {touched.cpf && errors.cpf && <Text style={styles.erro}>{errors.cpf}</Text>}
                      
                        <Text>Email: </Text>
                        <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} keyboardType="email-address" style={styles.input} />
                        {touched.email && errors.email && <Text style={styles.erro}>{errors.email}</Text>}

                      
                        <Text>Contato: </Text>
                        <TextInput onChangeText={handleChange('contato')} onBlur={handleBlur('contato')} keyboardType="decimal-pad" style={styles.input} />
                        {touched.contato && errors.contato && <Text style={styles.erro}>{errors.contato}</Text>}

                      
                        <Text>Senha: </Text>
                        <TextInput onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} secureTextEntry style={styles.input} />
                        {touched.senha && errors.senha && <Text style={styles.erro}>{errors.senha}</Text>}

                        <Button title="Cadastrar" onPress={() => handleSubmit()} disabled={isSubmitting} />
                        <Button title="Voltar" color={'red'} onPress={router.back} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    input: {
        backgroundColor: 'lightgrey',
        padding: 5
    },
    erro: {
        color: 'red',
        textAlign: 'right'
    },
    logo: {
        width: 70,
        height: 70,


    },
    header: {
        justifyContent: 'space-between',
        width: 320,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40
    },
    textHeader: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'bold',
        top: 40,
        right: 90

    },

});