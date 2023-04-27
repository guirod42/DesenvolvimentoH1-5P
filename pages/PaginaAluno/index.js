import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    ScrollView,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../styles/colors';
import Cabecalho from '../../components/CabecalhoProjeto';
import Pessoa from '../../components/PersonBox';




import api from '../../apiService/api';
import stylesGlobal from '../../styles/styles';
import { AntDesign } from '@expo/vector-icons';
const search = 'search1';

export default function PaginaAluno() {

    const [userName, setUserName] = useState('');
    const [userID, setUserID] = useState('');
    const [professorsList, setProfessorsList] = useState([]);
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const iconPass = search;

    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        const id = await AsyncStorage.getItem('@SistemaTCC:userID') || '';
        setUserID(id);
        setUserName(user);
    }

    async function searchTeachers() {
        await api.get('/usuarios?tipo=2').then((response) => {
            setProfessorsList(response.data);
        }).catch(err => console.log(err));
    }

    const noResultsComponent = (
        <View style={[styles.item, { justifyContent: 'center', height: 50 }]}>
            <Text style={{ fontStyle: 'italic' }}>Nenhum resultado encontrado</Text>
        </View>
    );

    const filteredTeachers = professorsList.filter(
        (item) => item.nome.toLowerCase().includes(searchText.toLowerCase())
    );

    const renderItem = ({ item }) => (
        <Pessoa
            img={item.imagem}
            nome={item.nome}
            id={item.id} />
    );

    useEffect(
        () => {
            loadStoreUserName();
            searchTeachers();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Cabecalho title={"Bem-vindo(a) " + userName} onPress={() => navigation.goBack()} />
            <Text style={styles.textTitle}>{"Defina o professor"}</Text>
            <View style={stylesGlobal.passwordContainer}>
                <TextInput
                    style={stylesGlobal.textInputPassword}
                    placeholder="Busque o professor..."
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                />
                <AntDesign
                    style={stylesGlobal.iconEye}
                    name={iconPass}
                    size={28}
                    color={colors.black}
                />
            </View>
            {filteredTeachers.length > 0 ? (
                <FlatList
                    data={filteredTeachers}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatList}
                    keyExtractor={item => item.id}
                />
            ) : (
                noResultsComponent
            )}
        </View>
    )
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

    flatList: {
        width: '110%',
        alignItems: 'center'
    }
});
