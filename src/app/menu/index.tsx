import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import imginicio from './../../../assets/imgs/Inicio.png'
import imgextrato from './../../../assets/imgs/Extrato.png'
import imgpix from './../../../assets/imgs/Pix_menu.png'
import imgmenu from './../../../assets/imgs/Menu.png'
import Sair from 'react-native-vector-icons/SimpleLineIcons'
import Cartao from 'react-native-vector-icons/Entypo'
import Config from 'react-native-vector-icons/Feather'
import imgseguranca from './../../../assets/imgs/seguranca.png'
import Ajuda from 'react-native-vector-icons/Ionicons'
import imgsair from './../../../assets/imgs/sair.png'
import Saldo from 'react-native-vector-icons/EvilIcons'
import Minhaconta from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/AntDesign'
import { router } from 'expo-router';
import { auth } from '../config/firebase';

export interface TelaMenuProps {
}

export default function TelaMenu(props: TelaMenuProps) {

    const [exibir, setExibir] = React.useState(false);
    const [instituicao, setInstituicao] = React.useState('(RR-Bank)');
    const [agencia, setAgencia] = React.useState('(777)');
    const [conta, setConta] = React.useState('(12345-6)');

    const menu = () => {
        router.replace('/menu')
    }

    const inicio = () => {
        router.replace('/inicio')
    }

    const extrato = () => {
        router.replace('/extrato')
    }

    const pix = () => {
        router.replace('/pix')
    }


    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Menu</Text>
            </View>

            <View style={{ padding: 10, justifyContent: 'space-around', flexDirection: 'column', width: 330, height: 72, backgroundColor: '#BDF8E2', borderRadius: 15 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Instituição: {exibir ? instituicao : '(**********)'} </Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Agência: {exibir ? agencia : '(****)'}  Conta: {exibir ? conta : '(********)'}  </Text>

                <TouchableOpacity onPress={() => setExibir(!exibir)}>
                    <Saldo style={styles.iconSaldo} name="eye" size={40} color='#000' />
                </TouchableOpacity>
            </View>

            <View style={styles.containersenha}>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Icon style={styles.imgMenu} name="user" size={28}></Icon>
                        <Text style={styles.textMenu}>Meus Dados </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Minhaconta style={styles.imgMenu} name="finance" size={28} ></Minhaconta>
                        <Text style={styles.textMenu}>Minha Conta </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Cartao style={styles.imgMenu} name="credit-card" size={28}></Cartao>
                        <Text style={styles.textMenu}>Meu Cartão </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Config style={styles.imgMenu} name="settings" size={28}></Config>
                        <Text style={styles.textMenu}>Configurações do Aplicativo </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Image style={styles.imgMenu} source={imgseguranca}></Image>
                        <Text style={styles.textMenu}>Segurança</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Ajuda style={styles.imgMenu} name="help-circle-outline" size={30}></Ajuda>
                        <Text style={styles.textMenu}>Ajuda </Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    auth.signOut();
                    router.replace('/')
                    
                }}>
                <View>
                    <Text>__________________________________________</Text>
                    <Sair style={styles.imgMenu} name="logout" size={25}></Sair>
                    <Text style={styles.textMenu}>Sair </Text>
                </View>
                </TouchableOpacity>


            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity onPress={inicio}>
                    <Image style={styles.imgRodape} source={imginicio}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={extrato}>
                    <Image style={styles.imgRodape} source={imgextrato}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={pix}>
                    <Image style={styles.imgRodape} source={imgpix}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={menu} >
                    <Image style={styles.imgRodape} source={imgmenu}></Image>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 45,
        flex: 1,

    },
    header: {
        justifyContent: 'space-between',
        width: 320,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40

    },
    logo: {
        width: 70,
        height: 70,


    },
    textHeader: {
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'bold',
        top: 25,
        right: 120

    },
    iconSaldo: {
        position: 'absolute',
        bottom: 10,
        right: 1
    },
    iconPagamento: {
        position: 'absolute',
        bottom: 35,
        right: 55
    },

    botaopagamento: {
        justifyContent: 'flex-end',
        width: 156,
        height: 100,
        backgroundColor: '#BDF8E2',
        borderRadius: 15,

    },
    pagamento: {
        width: 78,
        height: 56,
        left: 6
    },
    imgCofrinho_Emprestimo: {
        position: 'absolute',
        width: 45,
        height: 45,
        left: 55,
        bottom: 35
    },
    imgRodape: {
        width: 60,
        height: 70
    },
    containersenha: {

        justifyContent: 'space-around',
        shadowOpacity: 0.2,
        width: 325,
        height: 360,
        fontSize: 14,
        marginTop: 35,
        marginBottom: 85,
        borderRadius: 15,


    },
    textMenu: {
        position: 'absolute',
        fontSize: 16,
        left: 40,
        bottom: 10
    },
    imgMenu: {
        position: 'absolute',
        bottom: 5,

    },


});