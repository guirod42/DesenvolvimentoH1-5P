import React, { useState } from 'react';
import {
    Alert,
    FlatList,
    StyleSheet,
    Switch,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import api from '../../apiService/api.js';

import MyButton from '../../components/MyButton';
import colors from '../../styles/colors';
import stylesGlobal from '../../styles/styles';

const eye = 'eye';
const eyeOff = 'eye-off';

export default function CadastroAluno() {
    const Logo = require('../../assets/images/Uniaraxa.png');
    const [flShowPass, setShowPass] = useState(true);
    const [iconPass, setIconPass] = useState(eyeOff);
    const [txtNome, setNome] = useState('');
    const [txtEmail, setEmail] = useState('');
    const [txtUsuario, setUsuario] = useState('');
    const [txtSenha, setSenha] = useState('');
    const [txtConfSenha, setConfSenha] = useState('');
    const navigation = useNavigation();
    const [ehProfessor, setEhProfessor] = useState(false);
    const [userColor, setUserColor] = useState(colors.blue);
    const [userType, setUserType] = useState('Aluno');
    const [userLogin, setUserLogin] = useState('Matrícula (RA)');
    const [txtTipo, setTipo] = useState('1');

    function handleChangeIcon() {
        let icone = iconPass == eye ? eyeOff : eye;
        let flShowPassAux = !flShowPass;
        setShowPass(flShowPassAux);
        setIconPass(icone);
    }

    function selectType() {
        let type = userType == 'Professor' ? 'Aluno' : 'Professor';
        let login = userLogin == 'Usuário' ? 'Matrícula (RA)' : 'Usuário';
        let tipo = txtTipo == '2' ? '1': '2'
        let color = userColor == colors.blue ? colors.green_dark : colors.blue;
        setEhProfessor(previousState => !previousState);
        setUserType(type);
        setUserColor(color);
        setUserLogin(login);
        setTipo(tipo);
    }

    function validarCadastro() {
        let validacoes = [];
        let cadastroValido = true;
        if (txtNome.trim() === '') {
            validacoes.push('Campo nome é obrigatório');
            cadastroValido = false;
        }

        if (txtEmail.trim() === '') {
            validacoes.push('Campo e-mail é obrigatório');
            cadastroValido = false;
        }

        if (txtUsuario.trim() === '') {
            validacoes.push(`Campo ${userLogin} é obrigatório`);
            cadastroValido = false;
        }

        if (txtSenha.trim() === '') {
            validacoes.push('Campo senha é obrigatório');
            cadastroValido = false;
        }

        if (txtConfSenha.trim() === '') {
            validacoes.push('Repita a senha no segundo campo');
            cadastroValido = false;
        }

        if (txtSenha.trim() != txtConfSenha) {
            validacoes.push('Repita a mesma senha duas vezes');
            cadastroValido = false;
        }

        let objValidacao = {
            cadastroValido: cadastroValido,
            validacoes: validacoes
        };
        return objValidacao;
    }

    async function cadastrarPessoa() {
        let resultadoValidacao = validarCadastro();
        if (resultadoValidacao.cadastroValido) {
            let objNewPerson = {
                id: null,
                nome: txtNome,
                email: txtEmail,
                login: txtUsuario,
                password: txtSenha,
                tipo: txtTipo
            }
            const response = await api.post('/usuarios', objNewPerson);
            alert('Usuário Criado!');
            navigation.navigate('PaginaLogin');
            return;
        }
        else {
            resultadoValidacao.validacoes.forEach(item => {
                alert(item);
            });
            return;
        }
    }

    /*
        {
            "id": 1,
            "nome": "Guilherme Silva Rodrigues",
            "email": "gui.silva.rodrigues@outlook.com.br",
            "login": "G1",
            "password": "123",
            "tipo": 1
        },
    */

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
            <Text style={[styles.textTitle, { color: userColor }]}>Cadastro {userType}</Text>
            <View style={[stylesGlobal.selectType, { marginBottom: 35 }]}>
                <View style={{ flex: 0.3, alignItems: 'center' }}>
                    <Text>Aluno</Text>
                </View>
                <Switch
                    trackColor={{ false: colors.blue_light, true: colors.green_light }}
                    thumbColor={ehProfessor ? colors.green_dark : colors.blue}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={selectType}
                    value={ehProfessor} />
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
                        value={txtNome}
                    />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>E-mail:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='E-mail'
                        onChangeText={text => setEmail(text)}
                        value={txtEmail}
                    />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>{userLogin}:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder={userLogin}
                        onChangeText={text => setUsuario(text)}
                        value={txtUsuario}
                    />
                </View>
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>Senha:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='Senha'
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
            </View>
            <View style={stylesGlobal.textInput}>
                <View style={stylesGlobal.textContainer}>
                    <Text style={styles.campoDescricao}>Senha:</Text>
                    <TextInput style={styles.campoEntrada}
                        placeholder='Confirmação de Senha'
                        onChangeText={text => setConfSenha(text)}
                        value={txtConfSenha}
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
            </View>

            <MyButton title={'Cadastrar ' + userType} color={userColor} onPress={cadastrarPessoa} />

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
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
    },

    campoDescricao: {
        textAlign: 'right',
        marginLeft: 2
    },

    campoEntrada: {
        flex: 2,
        marginLeft: 7
    },

    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginTop: 10,
    }
});