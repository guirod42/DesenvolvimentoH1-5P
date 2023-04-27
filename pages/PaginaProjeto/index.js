import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../styles/colors';
import Cabecalho from '../../components/CabecalhoProjeto';
import Pessoa from '../../components/PersonBox';
import imgTeste from '../../assets/images/Druid.jpg';
import api from '../../apiService/api';

export default function Projeto() {
    const navigation = useNavigation();

    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [projectID, setProjectID] = useState('');
    const [professorID, setProfessorID] = useState('');
    
    const [projectDescription, setProjectDescription] = useState('');
    const [professorNome, setProfessorNome] = useState('');

    const [projectName, setProjectName] = useState('');


    async function loadData() {
        const userName = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        const userID = await AsyncStorage.getItem('@SistemaTCC:userID') || '';
        await api.get('/solicitacoes?AlunoSolicitanteID=' + userID).then(
            async (response) => {
                const data = response.data;
                const projectId = data[0].id;
                const projectName = data[0].NomeProjeto;
                const projectDescription = data[0].Descricao;
                const professorID = data[0].ProfessorOrientadorID;

                setProjectID(projectId);
                setProjectName(projectName);
                setProfessorID(professorID);
                setProjectDescription(projectDescription);
                await api.get(`/usuarios?id=${professorID}`).then(
                    async (response) => {
                        const data = response.data;
                        const professorNome = data[0].nome;
                        setProfessorNome(professorNome);
                    }
                )                
            })
            .catch(err => console.log(err));
        setUserName(userName);
        setUserID(userID);
    }

    useEffect(
        () => {
            loadData();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Cabecalho title={"Bem-vindo(a) " + userName} onPress={() => navigation.goBack()} />
            <Text style={styles.textTitle}>{"Projeto: " + projectName}</Text>
            <Text style={styles.textTitle}>{"Descricao: " + projectDescription}</Text>
            <Text style={styles.textTitle}>{"Orientador: " + professorNome}</Text>
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
        textAlign: 'center'
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 35,
        marginTop: 35,
    },
});