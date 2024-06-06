import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Button, } from 'react-native';
import logo from './../../../assets/imgs/Logo_RRBank.png'
import imginicio from './../../../assets/imgs/Inicio.png'
import imgextrato from './../../../assets/imgs/Extrato.png'
import imgpix from './../../../assets/imgs/Pix_menu.png'
import imgmenu from './../../../assets/imgs/Menu.png'
import Cartao from 'react-native-vector-icons/Entypo'
import Pix from 'react-native-vector-icons/MaterialIcons'
import Extrato from 'react-native-vector-icons/FontAwesome5'
import Comprovante from 'react-native-vector-icons/FontAwesome5'
import Saldo from 'react-native-vector-icons/Entypo'
import Minhaconta from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/FontAwesome6'
import { router } from 'expo-router';


export interface PagarContasProps {
}

export default function PagarContas(props: PagarContasProps) {

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



    const [buscarboleto, setBuscarboleto] = React.useState('');



    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textHeader}>Insira o Código de Barras</Text>
            </View>

            <View style={{ padding: 5, width: 330, height: 50, backgroundColor: '#BDF8E2', borderRadius: 15 }}>
                <TouchableOpacity onPress={(setBuscarboleto) => console.log('Busca Realizada')}>
                    <Saldo style={styles.iconSaldo} name="magnifying-glass" size={40} />
                </TouchableOpacity>
                <TextInput onChangeText={(buscarboleto) => setBuscarboleto(String(buscarboleto))} placeholder='Digite ou cole o código...' style={{ left: 50, top: 10, fontSize: 16, }}></TextInput>

            </View>

            <View style={styles.containerboleto}>
                <TouchableOpacity>
                    <View style={styles.botaoBoleto}>
                        <Icon2 style={styles.imgMenu} name="magnifying-glass-dollar" size={23}></Icon2>
                        <Text style={styles.textboleto}>Buscar Boleto</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.botaoBoleto}>
                        <Icon style={styles.imgMenu} name="camera" size={23}></Icon>
                        <Text style={styles.textboleto}>Ler código com câmera</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.botaoBoleto}>
                        <Icon style={styles.imgMenu} name="barcode" size={23}></Icon>
                        <Text style={styles.textboleto}>Boleto DDA</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <View>
            <TouchableOpacity>
                    <View style={styles.botaoContinuar}>
                        <Text style={styles.textContinuar}>Continuar</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity>
                    <View style={styles.botaoContinuar}>
                        <Text style={styles.textContinuar}>Voltar</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 100}}>
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
        width: 150,
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 20,
        fontWeight: 'bold',
        top: 25,
        right: 75


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
    containerboleto: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        shadowOpacity: 0.2,
        width: 325,
        height: 100,
        fontSize: 14,
        marginTop: 75,
        marginBottom: 80,
        borderRadius: 15,
     


    },
    textMenu: {
        position: 'absolute',
        fontSize: 16,
        left: 40,
        bottom: 15
    },
    imgMenu: {
        position: 'absolute',
        top: 15,
        left: 40

    },
    textboleto: {
        textAlign: 'center',
        padding: 5,
        fontSize: 13,
        fontWeight: 'bold',
        bottom: 10
    },
    botaoBoleto: {
        width: 100,
        height: 82,
        backgroundColor: '#BDF8E2',
        borderRadius: 15,
        justifyContent: 'flex-end',
    },
    botaoContinuar: {
        alignSelf: 'center',
        width: 280,
        height: 50,
        backgroundColor: '#BDF8E2',
        borderRadius: 15,
        justifyContent: 'center',
        marginBottom: 25
        
    },
    textContinuar: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },


});