import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../styles/colors';

export default function Login() {

    const Logo = require('../../assets/images/Uniaraxa.png');
    const [userName, setUserName] = useState('');

    async function loadStoreUserName() {
        const user = await AsyncStorage.getItem('@SistemaTCC:userName') || '';
        setUserName(user);
    }

    useEffect(
        () => {
            loadStoreUserName();
        },
        []
    );

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.image} />
            <Text style={styles.textTitle}>Página do Aluno {userName}</Text>
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
    }
});