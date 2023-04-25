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

export default function Login() {

    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [userList, setuserList] = useState([]);
    const navigation = useNavigation();

    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        const id = await AsyncStorage.getItem('@SistemaTCC:userID') || '';
        setUserID(id);
        setUserName(user);
    }

    async function loadProfessores() {
        await api.get('/usuarios?tipo=2').then((response) => {
            setuserList(response.data);
        }).catch(err => console.log(err));
    }

    useEffect(
        () => {
            loadStoreUserName();
            loadProfessores();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Cabecalho title={"Bem-vindo(a) " + userName} onPress={() => navigation.goBack()} />
            <Text style={styles.textTitle}>{"Defina o professor"}</Text>
            <FlatList
                data={userList}
                renderItem={({ item }) => (
                    <Pessoa
                        picture={imgTeste}
                        nome={item.nome}
                        id={item.id}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.itemJokeCSS}
                keyExtractor={item => item.id}
            />
            <Text style={styles.textTitle}>{"Fim de página"}</Text>
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

    jokeListCss: {

    },

    itemJokeCSS: {

    }
});