import React, { useState, useEffect } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../apiService/api';
import MyButton from '../../components/MyButton';
import LinkButton from '../../components/LinkButton';
import colors from '../../styles/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesGlobal from '../../styles/styles';

const eye = 'eye';
const eyeOff = 'eye-off';

export default function Login() {
    const Logo = require('../../assets/images/Uniaraxa.png');
    const [flShowPass, setShowPass] = useState(true);
    const [iconPass, setIconPass] = useState(eyeOff);
    const [txtLogin, setLogin] = useState('')
    const [txtSenha, setSenha] = useState('')
    const navigation = useNavigation();

    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;
        setShowPass(flShowPassAux);
        setIconPass(icone);
    }

    function troca() {
        txtLogin === 'Guilherme'
        ? (setLogin('Humberto'), setSenha('123'))
        : (setLogin('Guilherme'), setSenha('12345'));
    }

    async function searchUser() {
        if (txtLogin.trim() === '') {
            alert('Campo login é obrigatório');
            return;
        }

        if (txtSenha.trim() === '') {
            alert('Campo senha é obrigatório');
            return;
        }

        let resposta = 0;

        await api.get(`/usuarios?login=${txtLogin}&password=${txtSenha}`).then((response) => {
            resposta = response.data.length;
            if (resposta == 0) {
                alert('Usuario e/ou senha inválido!');
                return;
            } else {
                AsyncStorage.setItem('@SistemaTCC:userName', response.data[0].nome);
                AsyncStorage.setItem('@SistemaTCC:userID', String(response.data[0].id));
                try {
                    if (response.data[0].tipo == 1) {
                        navigation.navigate('PaginaAluno');
                        return;
                    }

                    if (response.data[0].tipo == 2) {
                        navigation.navigate('PaginaProfessor');
                        return;
                    }

                    alert('Não está achando o tipo');
                    return;
                }
                catch (error) {
                    console.error(error);
                }
                return;
            }
        }).catch(err => alert(err));
    }

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
            <Text style={styles.textTitle}>Sistema de TCC</Text>
            <TextInput
                style={stylesGlobal.textInput}
                placeholder="Login"
                onChangeText={text => setLogin(text)}
                value={txtLogin}
            />
            <View style={stylesGlobal.passwordContainer}>
                <TextInput
                    style={stylesGlobal.textInputPassword}
                    placeholder="Senha"
                    onChangeText={text => setSenha(text)}
                    value={txtSenha}
                    secureTextEntry={flShowPass}
                />
                <Feather
                    style={stylesGlobal.iconEye}
                    name={iconPass}
                    size={28}
                    color={colors.redButton}
                    onPress={handleChangeIcon}
                />
            </View>
            <MyButton title='Entrar' color={colors.blue} onPress={searchUser} />
            <MyButton title='Troca' color={colors.gray} onPress={troca} />
            <LinkButton title='Inscrever-se' onPress={() => navigation.navigate('CadastroPessoa')} />
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
        color: colors.blue,
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 35,
        marginTop: 35,
    }
});