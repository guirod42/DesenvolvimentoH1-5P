import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles';

export default function CabecalhoProjeto(props) {
    const navigation = useNavigation();
    const Logo = require('../../assets/images/Uniaraxa.png');
    return (
        <View style={styles.headerPrincipal}>
            <View style={styles.iconWrapper}>
                <Text style={stylesGlobal.titlePage}>{props.title}</Text>
                <Image source={Logo} style={styles.image} />
            </View>
            <View style={styles.titleWrapper}>
                <Text style={stylesGlobal.titlePage}>{props.title}</Text>
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
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleWrapper: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 20,
        height: 20,
        marginBottom: 0,
        marginTop: 0,
    }
})
