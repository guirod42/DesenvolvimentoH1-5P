import React, { useState } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View
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
    
        if(txtLogin == "Gui" && txtSenha == "123"){
            await AsyncStorage.setItem('@nameApp:userName', txtLogin);         
            navigation.navigate('RolandoPagina');
        } else {
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
            <Text style={styles.textTitle}>Seja bem vindo!</Text>
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
        justifyContent: 'center',
    },

    textTitle: {
        color: 'red',
        fontSize: 28,
        marginBottom: 8
    },
});