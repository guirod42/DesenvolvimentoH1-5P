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
// import api from '../../apiService/'
// import Loading from '../../Components/Loading/Loading';

import MyButton from '../../components/MyButton/';
import LinkButton from '../../components/LinkButton/';
import colors from '../../styles/colors';
import stylesGlobal from '../../styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const eye = 'eye';
const eyeOff = 'eye-off';

export default function PaginaLogin() {

    const [flShowPass, setShowPass] = useState(true);
    const [iconPass, setIconPass] = useState(eyeOff);
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

    function navigateToHome() {
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
            navigation.navigate('RolandoPagina');
        }
        
        else{
            alert('Usuario e/ou senha inválido!');
            setLoading(false);
            return;
        }
        //  setLoading(false);
    }

    function navigateToNewUser() {
        navigation.navigate('CadastroPessoa');
    }
    /*if (flLoading) {
        return (<Loading />);
    }*/

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