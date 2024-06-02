import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import receberpix from './../../../assets/imgs/Receberpix.png'
import pagarboleto from './../../../assets/imgs/Pagarboleto.png'
import pagarpix from './../../../assets/imgs/Pagarpix.png'
import cofrinho from './../../../assets/imgs/cofrinho.png'
import emprestimo from './../../../assets/imgs/emprestimo.png'
import imginicio from './../../../assets/imgs/Inicio.png'
import imgextrato from './../../../assets/imgs/Extrato.png'
import imgpix from './../../../assets/imgs/Pix_menu.png'
import imgmenu from './../../../assets/imgs/Menu.png'
import Finance from 'react-native-vector-icons/MaterialCommunityIcons'


import Saldo from 'react-native-vector-icons/EvilIcons'
import Minhaconta from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/Entypo'
import { router } from 'expo-router';

export interface TelaInicioProps {
}

export default function TelaInicio(props: TelaInicioProps) {

    const [exibir, setExibir] = React.useState(false);
    const [valor, setValor] = React.useState(100);

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

     const pag_recebpix = () => {
        router.replace('/pag_recebpix')
     }

     const pagarcontas = () => {
        router.replace('/pagarconta')
     }
     

    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Olá, Rafael</Text>
            </View>

            <View style={{ justifyContent: 'space-around', flexDirection: 'column', width: 320, height: 72 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Saldo Disponível</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>R$ {exibir ? valor : '**********'} </Text>


                <TouchableOpacity onPress={() => setExibir(!exibir)}>
                    <Saldo style={styles.iconSaldo} name="eye" size={40} color='#000' />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15, marginBottom: 25 }}>
                <Text>MOVIMENTAR A CONTA</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={pag_recebpix} >
                    <Image style={styles.pagamento} source={receberpix}></Image>
                    <Text>Receber Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pagarcontas}>
                    <Image style={styles.pagamento} source={pagarboleto}></Image>
                    <Text>Pagar Contas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pag_recebpix}>
                    <Image style={styles.pagamento} source={pagarpix}></Image>
                    <Text>Pagar Com Pix</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15, marginBottom: 25 }}>
                <Text>SERVIÇOS PARA VOCÊ</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, }}>
                <TouchableOpacity>
                    <View style={styles.botaopagamento}>
                        <Button title='Minha Conta' color={'#000'}></Button>
                        <Minhaconta style={styles.iconPagamento} name="credit" size={40} ></Minhaconta>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.botaopagamento}>
                        <Button title='Cartões' color={'#000'}></Button>
                        <Icon style={styles.iconPagamento} name="credit-card" size={40} />
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <TouchableOpacity>
                    <View style={styles.botaopagamento}>
                        <Button title='Control Finances' color={'#000'}></Button>
                        <Finance style={styles.iconPagamento} name="finance" size={40} ></Finance>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.botaopagamento}>
                        <Button title='Emprestimo' color={'#000'}></Button>
                        <Image style={styles.imgCofrinho_Emprestimo} source={emprestimo}></Image>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 110 }}>
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
        marginBottom: 4

    },
    logo: {
        width: 70,
        height: 70,


    },
    textHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        right: 100

    },
    iconSaldo: {
        position: 'absolute',
        bottom: 20,
        right: 10
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
    imgMenu: {
        position: 'absolute',
        bottom: 5,

    },

});