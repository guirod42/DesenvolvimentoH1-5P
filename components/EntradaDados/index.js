import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles';
import colors from '../../styles/colors'

export default function EntradaDados(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.textContainer}>
            <Text style={styles.campoDescricao}>{props.title}</Text>
            <TextInput style={styles.campoEntrada} placeholder={props.subtitle} />
        </View>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        height: 40,
        marginBottom: 16,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    campoDescricao: {
        textAlign: 'right',
        marginLeft: 2
    },
    
    campoEntrada: {
        flex: 2,
        marginLeft: 7
    },
})