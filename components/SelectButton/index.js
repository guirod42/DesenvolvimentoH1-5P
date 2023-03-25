import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default function SelectButton(props) {
    return (
        <RectButton style={styles.MyButtonStyle}{...props}>
            <Text style={styles.MyTextButtonStyle}>
                {props.title}
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    MyButtonStyle: {
        borderRadius: 8,
        height: 30,
        width: 30,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    MyTextButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
});