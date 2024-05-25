import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import receberpix from './../../../assets/imgs/Receberpix.png'
import pagarboleto from './../../../assets/imgs/Pagarboleto.png'
import pagarpix from './../../../assets/imgs/Pagarpix.png'
import cofrinho from './../../../assets/imgs/cofrinho.png'
import emprestimo from './../../../assets/imgs/emprestimo.png'

import Saldo from 'react-native-vector-icons/EvilIcons'
import Minhaconta from 'react-native-vector-icons/Entypo'
import  Icon  from 'react-native-vector-icons/Entypo'

export interface TelaInicioProps {
}

export default function TelaInicio(props: TelaInicioProps) {

    const [ exibir, setExibir ] = React.useState(false);
    const [ valor, setValor ] = React.useState(100);

    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Olá, Rafael</Text>
            </View>

            <View style={{ justifyContent: 'space-around', flexDirection: 'column', width: 320, height: 72 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Saldo Disponível</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>R$ { exibir ?  valor : '**********'} </Text>


                <TouchableOpacity onPress={() => setExibir(!exibir)}>
                    <Saldo style={styles.iconSaldo} name="eye" size={40} color='#000' />
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15, marginBottom: 25 }}>
                <Text>MOVIMENTAR A CONTA</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity >
                    <Image style={styles.pagamento} source={receberpix}></Image>
                    <Text>Receber Pix</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.pagamento} source={pagarboleto}></Image>
                    <Text>Pagar Contas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.pagamento} source={pagarpix}></Image>
                    <Text>Pagar Com Pix</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 15, marginBottom: 25 }}>
                <Text>SERVIÇOS PARA VOCÊ</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15,}}>
                <View style={styles.botaopagamento}>
                    <Button title='Minha Conta' color={'#000'}></Button>
                    <Minhaconta style={styles.iconPagamento} name="credit" size={40} ></Minhaconta>
                </View>
                <View style={styles.botaopagamento}>
                    <Button title='Cartões' color={'#000'}></Button>
                    <Icon style={styles.iconPagamento} name="credit-card" size={40} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={styles.botaopagamento}>
                    <Button title='Cofrinho' color={'#000'}></Button>
                    <Image style={styles.imgCofrinho_Emprestimo} source={cofrinho}></Image>
                </View>
                <View style={styles.botaopagamento}>
                    <Button title='Emprestimo' color={'#000'}></Button>
                    <Image style={styles.imgCofrinho_Emprestimo} source={emprestimo}></Image>
                </View>
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
        height: 85,
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
        height: 40,
        left: 55,
        bottom: 35
    }


});