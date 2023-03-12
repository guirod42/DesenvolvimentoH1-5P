import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React, { useState } from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default function BotaoMenu(props) {
    return (
        <View style={styles.buttonContainer}>
            <RectButton style={styles.MyButtonStyle}
                {...props}>
                <Text style={styles.MyTextButtonStyle}>
                    {props.title}
                </Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    MyButtonStyle: {
        backgroundColor: colors.dim_gray,
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    MyTextButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
});