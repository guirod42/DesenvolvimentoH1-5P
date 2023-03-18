import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
//import api from '../../Services/api';

import MyButton from '../../components/MyButton';
import LinkButton from '../../components/LinkButton';
import colors from '../../styles/colors';
import stylesGlobal from '../../styles/styles';

//import Loading from '../../Components/Loading/Loading';

import AsyncStorage from '@react-native-async-storage/async-storage';

const eye = 'eye';
const eyeOff = 'eye-off';

export default function CadastroAluno() {

    const [flShowPass, setShowPass] = useState(false);
    const [iconPass, setIconPass] = useState(eye);
    const [txtNome, setNome] = useState('');
    const [txtEmail, setEmail] = useState('');
    const [txtUsuario, setUsuario] = useState('');
    const [txtSenha, setSenha] = useState('');
    const [txtConfSenha, setConfSenha] = useState('');
    const navigation = useNavigation();
    const [flLoading, setLoading] = useState(false);
    const [ehProfessor, setEhProfessor] = useState(false);
    const [buttonColor, setButtonColor] = useState(colors.blue);
    const toggleSwitch = () => setEhProfessor(previousState => !previousState);
    const [userType, setUserType] = useState('Aluno');

    /*
    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;       
        setShowPass(flShowPassAux);
        setIconPass(icone);        
    }
    */

    function selectType() {
        
        let tipo = userType == 'Professor' ? 'Aluno' : 'Professor';
        let color = buttonColor == colors.blue ? colors.red : colors.blue;
        setEhProfessor(previousState => !previousState);
        setUserType(tipo);
        setButtonColor(color);
        
    }

    function navigateToHome() {
        if (txtNome.trim() === '') {
            alert('Campo nome é obrigatório');
            setLoading(false);
            return;
        }

        if (txtEmail.trim() === '') {
            alert('Campo e-mail é obrigatório');
            setLoading(false);
            return;
        }

        if (txtUsuario.trim() === '') {
            alert('Campo usuário é obrigatório');
            setLoading(false);
            return;
        }

        if (txtSenha.trim() === '') {
            alert('Campo senha é obrigatório');
            setLoading(false);
            return;
        }

        if (txtConfSenha.trim() === '') {
            alert('Repita a senha no segundo campo');
            setLoading(false);
            return;
        }

        if (txtSenha.trim() != txtConfSenha) {
            alert('Repita a mesma senha duas vezes');
            setLoading(false);
            return;
        }
        navigation.navigate('RolandoPagina');
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
            <Text style={styles.textTitle}>Cadastro {userType}</Text>
            <View style={[stylesGlobal.selectType, { marginBottom: 35 }]}>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Text>Aluno</Text>
                </View>
                <Switch
                    trackColor={{ false: colors.cornflower_blue, true: colors.salmon }}
                    thumbColor={ehProfessor ? colors.red : colors.blue}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={selectType}
                    value={ehProfessor}
                />
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Text>Professor</Text>
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>Nome:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='Nome completo'
                        onChangeText={x => setNome(x)}
                        value={txtNome} />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>E-mail:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='E-mail'
                        onChangeText={text => setEmail(text)}
                        value={txtEmail} />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>Usuário:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='Usuário'
                        onChangeText={text => setUsuario(text)}
                        value={txtUsuario} />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>Senha:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='Senha'
                        onChangeText={text => setSenha(text)}
                        value={txtSenha} />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>Senha:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='Confirmação de Senha'
                        onChangeText={text => setConfSenha(text)}
                        value={txtConfSenha} />
                </View>
            </View>

            <MyButton title={'Cadastrar ' + userType} color={buttonColor} onPress={navigateToHome} />

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
        color: colors.black,
        fontSize: 28,
        marginBottom: 35
    },

    campoDescricao: {
        textAlign: 'right',
        marginLeft: 2
    },
    
    campoEntrada: {
        flex: 2,
        marginLeft: 7
    },
});