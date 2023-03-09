import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/styles';

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
    };

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
                style={styles.fundoPagina}>

                {!NovaImagem &&
                    <Text style={[styles.title, { marginTop: 30 }]}>Seja bem vindo!!</Text>
                }
                <View style={styles.inputContainer}>
                    {!NovaImagem &&
                        <TouchableOpacity style={styles.buttonPrincipal} onPress={mostrarOpcoes}>
                            <Text style={styles.buttonText}>{mostrarOpcoes}MENUS</Text>
                        </TouchableOpacity>
                    }
                    {ExibirOpcoes &&
                        <>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Churrascometro')}>
                                <Text style={styles.buttonText}>Churrascômetro</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PaginaLogin')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CalculadoraIMC')}>
                                <Text style={styles.buttonText}>Calculadora de IMC</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConversaoMoeda')}>
                                <Text style={styles.buttonText}>Conversão de Moedas</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ApresentandoImagem')}>
                                <Text style={styles.buttonText}>Apresentação de Imagem</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RolandoPagina')}>
                                <Text style={styles.buttonText}>Rolagem de página</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PersonagemTeste')}>
                                <Text style={styles.buttonText}>PersonagemTeste</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.button} onPress={trocarFundo}>
                                <Text style={styles.buttonText}>Trocar Imagem</Text>
                            </TouchableOpacity>
                        </>
                    }

                    {NovaImagem &&
                        <>
                            <View style={[{
                                flexDirection: 'row',
                                position: 'absolute',
                                bottom: 15,
                                left: 0,
                                right: 0,
                                justifyContent: 'center',
                            }]}>
                                <View style={[{ flex: 1 },
                                { justifyContent: 'center' }]}>
                                    <TouchableOpacity style={styles.buttonTransparent} onPress={trocarFundo}>
                                        <Text style={styles.buttonText}>Trocar Imagem</Text>
                                    </TouchableOpacity>
                                </View>
                                {NovaImagem &&
                                    <>
                                        <View style={{
                                            flex: 0.3,
                                            justifyContent: 'center'
                                        }}>
                                            <TouchableOpacity style={styles.buttonCheck} onPress={escolherImagem}>
                                                <Ionicons name="color-palette-outline" size={30} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                    </>
                                }
                            </View>
                        </>
                    }
                </View>
            </ImageBackground >
        </View>
    );
}
