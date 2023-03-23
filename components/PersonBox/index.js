import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import SelectButton from '../SelectButton'
import { useNavigation } from '@react-navigation/native'

export default function PersonBox(props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={[styles.item, { width: '20%' }]} >
                <ProfilePicture source={props.picture} />
            </View>

            <View style={styles.ladoDireito}>
                <View style={styles.item}>
                    <Text>{props.title}</Text>
                </View>

                <View style={styles.item}>
                    <SelectButton title={'ESCOLHER'} onPress={() => navigation.navigate('RolandoPagina')} />
                </View>
            </View>
        </View >
    );
}

//  <SelectButton></SelectButton>
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        borderColor: colors.black,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    item: {
        alignItems: 'center',
        padding: 5
    },

    ladoDireito: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});