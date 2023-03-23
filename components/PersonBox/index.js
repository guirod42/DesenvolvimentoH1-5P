import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default function PersonBox(props) {
    return (
        <View style={styles.container}>
            <View>
                <ProfilePicture source={SelectImage} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
        flexDirection: 'row',
    },
});