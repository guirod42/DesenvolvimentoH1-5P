import React, { useState } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    FlatList,
    Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
//import api from '../../Services/api';

import MyButton from '../../components/MyButton/';
import LinkButton from '../../components/LinkButton/';
import EntradaDados from '../../components/EntradaDados/';
import colors from '../../styles/colors';
import stylesGlobal from '../../styles/styles';

//import Loading from '../../Components/Loading/Loading';

import AsyncStorage from '@react-native-async-storage/async-storage';

const eye = 'eye';
const eyeOff = 'eye-off';

export default function CadastroAluno() {

    const [flShowPass, setShowPass] = useState(false);
    const [iconPass, setIconPass] = useState(eye);
    const [txtLogin, setLogin] = useState('')
    const [txtSenha, setSenha] = useState('')
    const navigation = useNavigation();
    const [flLoading, setLoading] = useState(false)

    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;
        setShowPass(flShowPassAux);
        setIconPass(icone);
    }

    async function navigateToHome() {

        if (txtLogin.trim() === '') {
            alert('Campo login é obrigatório');
            return;
        }
        if (txtSenha.trim() === '') {
            alert('Campo senha é obrigatório');
            return;
        }
        //  setLoading(true);
        if (txtLogin == "Gui" && txtSenha == "123") {
            await AsyncStorage.setItem('@nomeApp:userName', txtLogin);
            navigation.navigate('RolandoPagina');
        } else {
            alert('Usuario e/ou senha inválido!');
            return;
        }
        //  setLoading(false);
    }

    function navigateToNewUser() {
        //navigation.navigate('NewUser'); -- navegar para página de novo usuário
    }
    /*if (flLoading) {
        return (<Loading />);
    }*/

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Cadastro Aluno</Text>
            <View style={stylesGlobal.textInput}>
                <EntradaDados title="Nome:" subtitle="Nome completo" onPress={() => navigation.goBack()} />
            </View>
            <View style={stylesGlobal.textInput}>
                <EntradaDados title="E-mail:" subtitle="E-mail" onPress={() => navigation.goBack()} />
            </View>
            <View style={stylesGlobal.textInput}>
                <EntradaDados title="Senha:" subtitle="Senha" onPress={() => navigation.goBack()} />
            </View>                      
            <View style={stylesGlobal.textInput}>
                <EntradaDados title="Confirmação de senha:" subtitle="Senha" onPress={() => navigation.goBack()} />
            </View>

            <MyButton title='Entrar' onPress={navigateToHome} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
    },

    textTitle: {
        color: 'red',
        fontSize: 28,
        marginBottom: 8
    },
});