import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../apiService/api';
import Cabecalho from '../../components/CabecalhoProjeto';
import colors from '../../styles/colors';
import Solicitacoes from '../../components/Solicitacoes';

export default function Login() {

    const Logo = require('../../assets/images/Uniaraxa.png');
    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [projectList, setProjectList] = useState([]);

    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        const id = await AsyncStorage.getItem('@SistemaTCC:userID') || '';
        await api.get('/solicitacoes?ProfessorOrientadorID=' + id).then(
            async (response) => {
                setProjectList(response.data);
            }).catch(err => console.log(err));
        setUserID(id);
        setUserName(user);
    }

    const noResultsComponent = (
        <View style={[styles.item, { justifyContent: 'center', height: 50 }]}>
            <Text style={{ fontStyle: 'italic' }}>Nenhuma solicitação nova</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Solicitacoes
            titulo={String(item.NomeProjeto)}
            descricao={String(item.Descricao)}
        />
    );

    useEffect(
        () => {
            loadStoreUserName();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Cabecalho title={"Bem-vindo(a) " + userName} />
            <Text style={styles.textTitle}>Solicitações em aberto</Text>
            {projectList.length > 0 ? (
                <FlatList
                    data={projectList}
                    renderItem={renderItem}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.id}
                />
            ) : (
                noResultsComponent
            )}
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
    },
    flatList: {
        width: 350
    }
});