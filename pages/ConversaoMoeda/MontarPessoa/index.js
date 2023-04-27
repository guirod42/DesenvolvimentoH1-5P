import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import React, { useState, useEffect } from 'react';
import colors from '../../../styles/colors';
import OptionButton from '../../Components/OptionButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../apiService/api';

export default function userList() {
    const [userName, setUserName] = useState('');
    const [userList, setUserList] = useState([]);

    async function loadUsuarios() {
        await api.get('/usuarios').then((response) => {
            setUserList(response.data);
        });
        alert('OK');
    }

    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@nomeApp:userName') || '';
        setUserName(user);
    }

    useEffect(() => {
        loadUsuarios();
        loadStoreUserName();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.question}>
                    {userName} escolha um e divirta-se:
                </Text>
            </View>

            <View style={styles.jokeListCss}>
                <FlatList
                    data={userList}
                    renderItem={({ item }) => (
                        <OptionButton title={item.title} />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={1}
                    contentContainerStyle={styles.itemJokeCSS}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 20
    },
    question: {
        fontSize: 17,
        color: colors.heading,
        textAlign: 'center'
    },
    jokeListCss: {
    },
    itemJokeCSS: {
    }
});