import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles';

export default function Cabecalho(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.headerPrincipal}>
            <View style={styles.iconWrapper}>
                <TouchableOpacity
                    style={stylesGlobal.backButton}
                    activeOpacity={0.6}
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
                </TouchableOpacity>
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
})
