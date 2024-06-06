import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import imginicio from './../../../assets/imgs/Inicio.png'
import imgextrato from './../../../assets/imgs/Extrato.png'
import imgpix from './../../../assets/imgs/Pix_menu.png'
import imgmenu from './../../../assets/imgs/Menu.png'
import Pix from 'react-native-vector-icons/MaterialIcons'
import Extrato from 'react-native-vector-icons/FontAwesome5'
import Saldo from 'react-native-vector-icons/Entypo'
import Minhaconta from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/AntDesign'


import { router } from 'expo-router';

export interface PagarPixProps {
}


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










export default function PagarPix(props: PagarPixProps) {
    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Receber ou Pagar Pix</Text>
            </View>

            <View style={{ padding: 5, width: 330, height: 50, backgroundColor: '#BDF8E2', borderRadius: 15 }}>
                <TouchableOpacity onPress={() => console.log('Busca Realizada')}>
                    <Saldo style={styles.iconSaldo} name="select-arrows" size={35} />
                </TouchableOpacity>
                <TextInput style={{padding: 10, left: 25, }}> Escolha como receber ou transferir!</TextInput>

            </View>


            <View style={styles.containersenha}>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Icon style={styles.imgMenu} name="qrcode" size={28}></Icon>
                        <Text style={styles.textMenu}>Qr Code Pix </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Minhaconta style={styles.imgMenu} name="bank-transfer" size={28} ></Minhaconta>
                        <Text style={styles.textMenu}>Pix Copia e Cola </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Pix style={styles.imgMenu} name="pix" size={28}></Pix>
                        <Text style={styles.textMenu}> Chave Pix </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>__________________________________________</Text>
                        <Extrato style={styles.imgMenu} name="file-alt" size={28}></Extrato>
                        <Text style={styles.textMenu}>Dados Bancários</Text>
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
        textAlign: 'center',
        width: 120,
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'bold',
        top: 25,
        right: 100
    

    },
    iconSaldo: {
        position: 'absolute',
        left: 1,

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
        justifyContent: 'space-evenly',
        shadowOpacity: 0.2,
        width: 325,
        height: 360,
        fontSize: 14,
        marginTop: 35,
        marginBottom: 108,
       


    },
    textMenu: {
        position: 'absolute',
        fontSize: 16,
        left: 40,
        bottom: 15
    },
    imgMenu: {
        position: 'absolute',
        bottom: 10,

    },


});