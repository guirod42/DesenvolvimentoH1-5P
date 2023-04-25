import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/styles';
import Cabecalho from '../../components/Cabecalho';
import ProfilePicture from '../../components/ProfilePicture';
import PersonBox from '../../components/PersonBox';

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
            <Cabecalho title="Visualizar Imagem ou GIF" onPress={() => navigation.goBack()} />
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
                    {ExibirImagem &&
                        <View style={styles.imageContainer}>
                            <PersonBox picture = {SelectImage} 
                                title = {'Guilherme'}
                                subTitles={['Subtitle 1', 'Subtitle 2']}></PersonBox>
                            <PersonBox picture = {SelectImage} 
                                title = {'Guilherme Silva Rodrigues SILVA SILVA SILVA'} 
                                subTitles={['']}></PersonBox>
                            <PersonBox picture = {SelectImage} 
                                title = {'Guilherme Silva Rodrigues TESTE TESTE TESTE'}
                                subTitles={['Subtitle 1','Subtitle 1','Subtitle 1', 'Subtitle 2']}></PersonBox>
                        </View>
                    }
                    {ExibirGIF && (
                        <View style={styles.imageContainer}> 
                            <ProfilePicture source={SelectGit} />
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}
