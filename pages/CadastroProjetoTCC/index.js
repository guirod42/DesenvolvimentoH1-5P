import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    Platform,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../styles/colors';
import Cabecalho from '../../components/CabecalhoProjeto';
import stylesGlobal from '../../styles/styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function CadastroProjetoTCC() {

    const navigation = useNavigation();
    const Logo = require('../../assets/images/Uniaraxa.png');
    const [userName, setUserName] = useState('');
    const [txtTitulo, setTitulo] = useState('');
    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        setUserName(user);
    }

    useEffect(
        () => {
            loadStoreUserName();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Cabecalho title={"Bem-vindo(a)? " + userName} onPress={() => navigation.goBack()} />
            <Text style={styles.textTitle}>Cadastro de Projeto de TCC</Text>
            <Text style={styles.title}>Título</Text>
            <KeyboardAvoidingView style={styles.keyboard} behavior='padding'>
                <View style={[styles.input]}>
                    <TextInput style={[]}
                        placeholder={'Título do TCC'}
                        onChangeText={text => setTitulo(text)}
                        value={txtTitulo}
                    />
                </View>
            </KeyboardAvoidingView >
            <Text style={styles.title}>Descrição</Text>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },

    textTitle: {
        color: colors.blue,
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
    },

    title: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        borderColor: '#000',
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 35,
        marginTop: 35,
    },

    input: {
        borderRadius: 8,
        borderColor: colors.black,
        borderWidth: 1,
        flex: 1,
    },

    keyboard: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    }
});