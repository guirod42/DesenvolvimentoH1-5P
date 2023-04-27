import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../styles/colors';
import Cabecalho from '../../components/CabecalhoProjeto';
import MyButton from '../../components/MyButton';
import api from '../../apiService/api.js';

export default function MontarSolicitacao() {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [professorID, setProfessorID] = useState('');
    const [professorName, setProfessorName] = useState('');

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function loadStoreUserName() {
        const userName = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        const userID = await AsyncStorage.getItem('@SistemaTCC:userID') || '';
        const professorID = await AsyncStorage.getItem('@SistemaTCC:professorID') || '';
        const professorName = await AsyncStorage.getItem('@SistemaTCC:professorName') || '';
        setUserName(userName);
        setUserID(userID);
        setProfessorID(professorID);
        setProfessorName(professorName);
    }

    function validarCadastro() {
        let validacoes = [];
        let cadastroValido = true;
        if (title.trim() === '') {
            validacoes.push('Coloque um título para a solicitação');
            cadastroValido = false;
        }

        if (description.trim() === '') {
            validacoes.push('Coloque uma descrição');
            cadastroValido = false;
        }

        let objValidacao = {
            cadastroValido: cadastroValido,
            validacoes: validacoes
        };

        return objValidacao;
    }
    
    async function cadastrarSolicitacao() {
        let resultadoValidacao = validarCadastro();
        if (resultadoValidacao.cadastroValido) {
            let objNewRequest = {
                id: null,
                AlunoSolicitanteID: userID,
                ProfessorOrientadorID: professorID,
                NomeProjeto: title,
                Descricao: description,
            }
            const response = api.post('/solicitacoes', objNewRequest);
            alert('Solicitação enviada');
            navigation.navigate('PaginaProjeto');
            return;
        }
        else {
            resultadoValidacao.validacoes.forEach(item => {
                alert(item);
            });
            return;
        }
    }


    useEffect(
        () => {
            loadStoreUserName();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Cabecalho title={"Bem-vindo(a) " + userName} onPress={() => navigation.goBack()} />
            <Text style={styles.textTitle}>{"Defina os detalhes da sua solicitação"}</Text>
            <Text style={styles.subtag}>Dê um título para sua proposta de TCC</Text>
            <TextInput
                style={styles.titleImput}
                placeholder="Titulo do proposta"
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <Text style={styles.subtag}>Descrição do projeto</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Descrição de objetivos para o projeto"
                onChangeText={text => setDescription(text)}
                value={description}
            />
            <MyButton title='Realizar solicitação ?' color={colors.green} onPress={cadastrarSolicitacao} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
    },

    textTitle: {
        color: colors.blue,
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 35,
        marginTop: 35,
    },

    textInput: {
        borderColor: colors.gray,
        height: 200,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '80%',
    },

    titleImput: {
        borderColor: colors.gray,
        height: 40,
        borderRadius: 8,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '80%',
    },


    input: {
        height: 50,
        borderWidth: 0,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 8,
        // borderColor: colors.white,
        color: colors.blackSpace,
        backgroundColor: colors.white,
        borderRadius: 8,
        fontSize: 16
    },

    inputTextArea: {
        height: 200,
        borderWidth: 1,
        width: '100%',
        marginBottom: 16,
        paddingHorizontal: 8,
        // borderColor: colors.white,
        color: colors.blackSpace,
        backgroundColor: colors.white,
        borderRadius: 8,
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'flex-end',
    },
});