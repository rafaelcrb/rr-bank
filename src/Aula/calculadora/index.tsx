import { useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, Switch, StyleSheet,  } from 'react-native';

export interface CalculadoraProps {
}

export default function CalculadoraScreen (props: CalculadoraProps) {

   const [ valor1, setValor1 ] = useState(0);
   const [ valor2, setValor2 ] = useState(0);
   const [ resultado, setResultado ] = useState(0);


    return (
        <View style={styles.container}>
        
        <Text style={styles.valores}>Valor 1:</Text>
        <TextInput
            value={""+valor1}
            onChangeText={(texto) => setValor1(parseInt(texto)) }
            style={styles.textInput}
            placeholder='Digite o Valor 1'/>

        <Text style={styles.valores}>Valor 2:</Text>    
        <TextInput 
            value={""+valor2}
            onChangeText={(texto) => setValor2 (parseInt (texto))}
            style={styles.textInput}
            placeholder='Digite o Valor 2'/> 

        <View style={styles.botao}>
            <Button title='+' onPress={() => setResultado (valor1 + valor2)} />
            <Button title='-' onPress={() => setResultado (valor1 - valor2)} />
            <Button title='/' onPress={() => setResultado (valor1 / valor2)} />
            <Button title='x' onPress={() => setResultado (valor1 * valor2)} />
            <Button title='c' color='red' onPress={() => {
               setValor1(0);
               setValor2(0);
               setResultado(0);
            }}/>
        </View>
        
        <Text style={styles.resultado}>Resultado:</Text>
        <Text style={styles.resultado}>{resultado}</Text>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        {/* <TouchableOpacity onPress={function () {console.log('Clique Realizado!!!')} }>   
            <Text style={styles.texto} >Olá Mundo</Text>
        </TouchableOpacity>

        <Button title="Clique-me" color="blue" onPress={function () {
           console.log('CLicou!')}} />
        <Text style={styles.texto} >Olá Mundo</Text>
        <Button title="Clique-me" color="blue" onPress={function () {
           console.log('CLicou!')}} />
        <TouchableOpacity onPress={function () {
            console.log('Clicou no Texto')
        }}>
            <Text style={styles.texto} >Olá Mundo</Text>
        </TouchableOpacity>
        
        <Button title="Clique-me" color="blue" onPress={function () {
           console.log('CLicou!')}} />
         */}

        {/* <TextInput placeholder='Digite seu E-mail:'/> 
        <TextInput placeholder='Digite sua Senha::' secureTextEntry/>      

        <Switch
            trackColor={{false: '#fff000', true: '#000fff'}}
        />

        <Text>Nome: {nome} </Text>*/}
        
        


      </View>
      
    );
}


const styles = StyleSheet.create({
   container: {
        padding: 30,
   },
   
   valores: {
        fontSize: 18,
   },

   textInput: {
        backgroundColor: 'gray',
        marginBottom: 10,
   },
   
   resultado: {
        fontSize: 20,
        textAlign: 'center',
   },
   
    texto: {
        fontSize: 30,
        backgroundColor: 'gray',
        padding: 10,
        marginBottom: 30,
        color: 'white',
        textAlign: 'center',
        height: 100,
    },

    botao: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    }
    
});
