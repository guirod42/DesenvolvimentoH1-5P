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
            <View style={[styles.item, { flex: 0.25 }]} >
                <ProfilePicture source={props.picture} />
            </View>

            <View style={[styles.item, { flex: 0.65 }]} >
                <View>
                    <Text style={ styles.nameTitle }>{props.title}</Text>
                </View>
                <View>
                    {props.subTitles.map((subTitle, index) => (
                        <Text style={styles.subTitle} key={index}>{subTitle}</Text>
                    ))}
                </View>
            </View>

            <View style={[styles.item, { flex: 0.10 }]} >
                <SelectButton title={'+'} onPress={() => navigation.navigate('RolandoPagina')} />
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
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    item: {
        padding: 5
    },

    nameTitle: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
    },
    subTitle: {
        marginLeft: 15,
        fontSize: 12,
        fontStyle: 'italic',
    }
});