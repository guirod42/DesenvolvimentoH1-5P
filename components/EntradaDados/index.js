import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles';

export default function EntradaDados(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.textContainer}>
            <Text>{props.title}</Text>
            <TextInput
                    placeholder={props.subtitle}
                />
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
    textContainer: {
        marginBottom: 16,
        height: 40,
        borderColor: '#dcdce6',
        borderRadius: 8,
        borderWidth: 1,
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: 'red'
    },


})
