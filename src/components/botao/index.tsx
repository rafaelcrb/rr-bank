import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export interface BotaoProps {
    texto: string;
    onPress(): void;
}
export function Botao(props: BotaoProps) {
    return (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.botaoContainer}>
            <Text style={styles.botaoTexto}>{props.texto}</Text>

            <Botao texto='Botão 1' onPress={() => console.log('Ciclou 1')}/> 
            <Botao texto='Botão 2' onPress={() => console.log('Ciclou 2')}/> 

        </View>
    </TouchableOpacity>)
    
}

const styles = StyleSheet.create({
    botaoContainer: {
        borderRadius: 10,
        backgroundColor: 'tomato',
        padding: 80
    },
    botaoTexto: {
        color: 'white'
    }
});