import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/styles';
import Cabecalho from '../../components/Cabecalho';

export default function ApresentandoImagem() {
    const navigation = useNavigation();

    const [ExibirImagem, setExibirImagem] = useState(false);
    const [ExibirGIF, setExibirGIF] = useState(false);

    const SelectImage = require('../../assets/images/NerdCast.jpg');
    const SelectGit = require('../../assets/images/OhWow.gif');

    function mostrarImagem() {
        ExibirImagem ? setExibirImagem(false) : setExibirImagem(true);
        setExibirGIF(false);
    }

    function mostrarGIF() {
        ExibirGIF ? setExibirGIF(false) : setExibirGIF(true);
        setExibirImagem(false);
    }

    return (
        <View style={styles.container}>
            <Cabecalho title="Visualizar Imagem ou GIF" onPress={() => navigation.goBack()}/>
            <View style={styles.centerPage}>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={mostrarImagem}
                    >
                        <Text style={styles.buttonText}>
                            {ExibirImagem ? 'Ocultar' : 'Mostrar'} Imagem
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={mostrarGIF}
                    >
                        <Text style={styles.buttonText}>
                            {ExibirGIF ? 'Ocultar' : 'Mostrar'} GIF
                        </Text>
                    </TouchableOpacity>
                    {ExibirImagem && (
                        <View style={styles.imageContainer}>
                            <Image
                                source={SelectImage}
                                resizeMode="contain"
                                style={styles.image}
                            />
                        </View>
                    )}
                    {ExibirGIF && (
                        <View style={styles.imageContainer}>
                            <Image
                                source={SelectGit}
                                resizeMode="contain"
                                style={styles.image}
                            />
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}
