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
    const [txtLogin, setLogin] = useState('')
    const [txtSenha, setSenha] = useState('')
    const navigation = useNavigation();
    const [flLoading, setLoading] = useState(false)
    const [listUsers, setUsers] = useState([]);
    const [userFind, setUserFind] = useState('');

    

    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;
        setShowPass(flShowPassAux);
        setIconPass(icone);
    }

    async function loadUsers() {
        await api.get('/usuarios').then((response) => {
            setUsers(response.data);
        }).catch(err => console.log(err));
    }

    async function searchUser() {
        await loadUsers();
        const filteredUsers = listUsers.filter((item) => item.login.includes(txtLogin));
        setUserFind(filteredUsers);
        return userFind && userFind.password.includes(txtSenha) ? true : false;
    }

    async function navigateToHome() {
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

        if (searchUser()) {
            await AsyncStorage.setItem('@nameApp:userName', txtLogin);
            navigation.navigate('RolandoPagina');
        }

        else {
            alert('Usuario e/ou senha inválido!');
            setLoading(false);
            return;
        }

        setLoading(false);
    }

    if (flLoading) {
        return (<Loading />);
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
            <MyButton title='Entrar' color={colors.blue} onPress={navigateToHome} />
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
        marginTop: 35
      },
});