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
    const [userFind, setUserFind] = useState([]);

    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;
        setShowPass(flShowPassAux);
        setIconPass(icone);
    }

    /*async function loadUsers() {
        await api.get(`usuarios?login=${txtlogin}`).then((response) => {
            setUsers(response.data);
        }).catch(err => console.log(err));
    }*/

    async function searchUser() {
        try {
            setUserFind = await api.get(`/usuarios?login=${txtLogin}&password=${txtSenha}`);
            if (userFind.data.length === 0) {
                alert('Deu ruim o usuário');
                return false;
            } else {
                alert('Usuário ok');
                return true;
            }
        } catch (error) {
            alert(error);
            return { success: false, message: 'Ocorreu um erro ao buscar o usuário' };
        }
    }
    /*
        if(response.data == []){ 
            return false;
        } else {
            return true;
        }
    }) // .catch(err => console.log(err));
}*/

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

        const exist = await searchUser()
        if(exist)
        {
            if(userFind.Tipo === 1) {  // tipo aluno
                // navegção pag do aluno
            }

            if(userFind.Tipo === 2) { // tipo professor
                // navegção pag do aluno
            }

            else {
                alert('Cadastro de usuário inválido!');
                setLoading(false);
                return;
            }
        }
        else{
            alert('Usuário ou senha inválidos!');
            setLoading(false);
            return;
        }
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
            <MyButton title='Entrar 2.0' color={colors.blue} onPress={navigateToHome} />
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