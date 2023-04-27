import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import React, { useState } from 'react';
import colors from '../../styles/colors';
import { useNavigation } from '@react-navigation/native'

export default function Tarefas(obj) {
    const navigation = useNavigation();

    return (
        <View style={styles.caixa}>
            <Text style={styles.nameTitle}>{obj.titulo}</Text>
            <Text style={styles.descricao}>{obj.descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    caixa: {
        backgroundColor: colors.wheat,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },

    nameTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    descricao: {
        textAlign: 'left',
        fontSize: 16,
    },
});