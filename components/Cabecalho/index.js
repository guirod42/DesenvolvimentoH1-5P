import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/styles';

export default function Cabecalho(props) {
    return (
        <View style={styles.headerPrincipal}>
            <View >
                <TouchableOpacity
                    style={styles.backButton}
                    activeOpacity={0.6}
                    {...props}>
                    <Ionicons name="arrow-back-circle-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.titlePage}>{props.title}</Text>
            </View>
        </View>
    )
}