import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import React, { useState } from 'react';
import ProfilePicture from '../ProfilePicture';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import SelectButton from '../SelectButton'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PersonBox(obj) {
    const navigation = useNavigation();
    
    async function goToPage(ProfessorID){
        await AsyncStorage.setItem('@SistemaTCC:SelectProfessor', String(ProfessorID));
        navigation.navigate('RolandoPagina')
    }
    
    return (
        <View style={styles.container}>
            <View style={[styles.item, { flex: 0.25 }]} >
                <ProfilePicture source={obj.picture} />
            </View>

            <View style={[styles.item, { flex: 0.65 }]} >
                <View>
                    <Text style={ styles.nameTitle }>{obj.nome}</Text>
                </View>
            </View>

            <View style={[styles.item, { flex: 0.10 }]} >
                <SelectButton title='+' onPress={() => {goToPage(obj.id)}} />
            </View>
        </View >
    );
}

//  <SelectButton></SelectButton>
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '81%',
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