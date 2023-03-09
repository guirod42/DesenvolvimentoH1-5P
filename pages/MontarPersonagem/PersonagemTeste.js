import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/styles';
import EstruturaPersonagem from '.';

export default function PersonagemTeste() {
    const App = () => {
        return (
            <View>
                <EstruturaPersonagem name="Guilherme" level={15} profession="druida" strength={25} />
            </View>
        );
    };
}