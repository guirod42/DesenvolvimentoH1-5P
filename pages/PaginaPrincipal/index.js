import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles'
import { ScrollView } from 'react-native-gesture-handler';
import BotaoMenu from '../../components/BotaoMenu';
import colors from '../../styles/colors';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';


export default function PaginaPrincipal() {

    const navigation = useNavigation();
    const [ExibirOpcoes, setExibirOpcoes] = useState(false);
    const [NovaImagem, setNovaImagem] = useState(false);
    const imageBackground = [
        require('../../assets/images/Leao.jpg'),
        require('../../assets/images/Druid.jpg'),
        require('../../assets/images/MeganFox.jpg'),
        require('../../assets/images/Guns.jpg'),
    ];
    const [imageBackgroundIndex, setimageBackgroundIndex] = useState(0);
    const ImagemFundo = imageBackground[imageBackgroundIndex];

    const trocarFundo = () => {
        setimageBackgroundIndex((imageBackgroundIndex + 1) % imageBackground.length);
        setNovaImagem(true);
        setExibirOpcoes(false);
    }

    function mostrarOpcoes() {
        ExibirOpcoes ? setExibirOpcoes(false) : setExibirOpcoes(true);
    }

    function escolherImagem() {
        setNovaImagem(false);
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={ImagemFundo}
                style={stylesGlobal.fundoPagina}>
                {!NovaImagem &&
                    <View style={{ width: '95%' }}>
                        <BotaoMenu title='MENU' onPress={mostrarOpcoes} />
                    </View>
                }
                {ExibirOpcoes &&
                    <>
                        <ScrollView style={stylesGlobal.scrollView}>
                            <BotaoMenu title='Churrascômetro' onPress={() => navigation.navigate('Churrascometro')} />
                            <BotaoMenu title='Login' onPress={() => navigation.navigate('PaginaLogin')} />
                            <BotaoMenu title='Calculadora de IMC' onPress={() => navigation.navigate('CalculadoraIMC')} />
                            <BotaoMenu title='Conversão de Moedas' onPress={() => navigation.navigate('ConversaoMoeda')} />
                            <BotaoMenu title='Apresentação de Imagem' onPress={() => navigation.navigate('ApresentandoImagem')} />
                            <BotaoMenu title='Rolagem de página' onPress={() => navigation.navigate('RolandoPagina')} />
                            <BotaoMenu title='Personagem Teste' onPress={() => navigation.navigate('PersonagemTeste')} />
                            <BotaoMenu title='Trocar Imagem' onPress={trocarFundo} />
                        </ScrollView>
                    </>
                }
                {NovaImagem &&
                    <View style={stylesGlobal.scrollView}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            position: 'absolute',
                            bottom: 15
                        }}>
                            <View style={{ width: '70%' }}>
                                <BotaoMenu title='Trocar a Imagem' onPress={trocarFundo} />
                            </View>
                            <View style={{ width: '25%' }}>
                                <View style={styles.buttonContainer}>
                                    <RectButton style={styles.MyButtonStyle} onPress={escolherImagem}>
                                        <Ionicons name="color-palette-outline" size={30} color="white" />
                                    </RectButton>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </ImageBackground >
        </View >
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    container: {
        flex: 1,
    },

    MyButtonStyle: {
        backgroundColor: colors.dim_gray,
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },

    MyTextButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },

    container: {
        flex: 1,
    },
});

