import React, { useState } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import api from '../../apiService/api'

import MyButton from '../../components/MyButton'
import LinkButton from '../../components/LinkButton';

import colors from '../../styles/colors';
import Loading from '../../components/Loading/index';

import AsyncStorage from '@react-native-async-storage/async-storage';
import stylesGlobal from '../../styles/styles';

const eye = 'eye';
const eyeOff = 'eye-off';

export default function Login() {
    const Logo = require('../../assets/images/Uniaraxa.png');
    const [flShowPass, setShowPass] = useState(true);
    const [iconPass, setIconPass] = useState(eyeOff);
    const [txtLogin, setLogin] = useState('Guilherme')
    const [txtSenha, setSenha] = useState('123')
    const navigation = useNavigation();
    const [flLoading, setLoading] = useState(false)
    const [userFind, setUserFind] = useState();

    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;
        setShowPass(flShowPassAux);
        setIconPass(icone);
    }

    function troca() {
        txtLogin === 'Guilherme' ? setLogin('Humberto') : setLogin('Guilherme');
    }

    async function searchUser() {
        setLoading(true);
        if (txtLogin.trim() === '') {
            alert('Campo login é obrigatório');
            setLoading(false);
            return;
        }

        if (txtSenha.trim() === '') {
            alert('Campo senha é obrigatório');
            setLoading(false);
            return;
        }

        let resposta = 0;

        await api.get(`/usuarios?login=${txtLogin}&password=${txtSenha}`).then((response) => {
            resposta = response.data.length;
            setUserFind(response.data[0]);
            AsyncStorage.setItem('@nameApp:userName', txtLogin);
            
            const user = AsyncStorage.getItem('@nameApp:userName') || '';
            alert(user);

            if (resposta == 0) {
                alert('Usuario e/ou senha inválido!');
                return;
            } else {
                alert(response.data[0].tipo);
                try {
                    if (response.data[0].tipo == 1) {
                        alert('Tipo 1 - Aluno');
                        navigation.navigate('RolandoPagina');
                        return;
                    }
                    if (response.data[0].tipo == 2) {
                        alert('Tipo 2 - Professor');
                        navigation.navigate('ConversaoMoeda');
                        return;
                    }
                    if (response.data[0].tipo == 42) {
                        navigation.navigate('PaginaPrincipal');
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