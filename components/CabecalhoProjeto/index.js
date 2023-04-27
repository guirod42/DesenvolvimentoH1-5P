import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles';

export default function CabecalhoProjeto(props) {
    const navigation = useNavigation();
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
        <View style={styles.headerPrincipal}>
            <View style={styles.iconWrapper}>
                <Image source={Logo} style={styles.image} />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={stylesGlobal.titlePage}> {props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerPrincipal: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    iconWrapper: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleWrapper: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 75,
        height: 75,
        marginBottom: 0,
        marginTop: 0,
    }
})
