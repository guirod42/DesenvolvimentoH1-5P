import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/styles';
import Cabecalho from '../../components/Cabecalho';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Churrascometro() {

    const navigation = useNavigation();

    const [TotalHomens, setTotalHomens] = useState(0);
    const [TotalMulheres, setTotalMulheres] = useState(0);
    const [TotalCriancas, setTotalCriancas] = useState(0);
    const [QtdCarneHomens, setQtdCarneHomens] = useState(0);
    const [QtdCarneMulheres, setQtdCarneMulheres] = useState(0);
    const [QtdCarneCriancas, setQtdCarneCriancas] = useState(0);
    const [TotalCarne, setTotalCarne] = useState(0);
    const [MostrarResultado, setMostrarResultado] = useState(false);

    function CalcularChurrasco() {
        const qtdCarnePessoa = 0.4;
        let tHomens = TotalHomens * qtdCarnePessoa;
        let tMulheres = TotalMulheres * qtdCarnePessoa * 0.75;
        let tCriancas = TotalCriancas * qtdCarnePessoa * 0.5;
        setQtdCarneHomens(tHomens); //vai procurar no "DOM"
        setQtdCarneMulheres((tMulheres).toFixed(2));
        setQtdCarneCriancas((tCriancas).toFixed(2));
        setTotalCarne((tHomens + tMulheres + tCriancas).toFixed(2));
        setMostrarResultado(true);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <Cabecalho title="Churrascômetro" onPress={() => navigation.goBack()} />
            <ScrollView>
                <TextInput
                    style={styles.input}
                    placeholder="Quantidade de Homens"
                    keyboardType="numeric"
                    onChangeText={(z) => setTotalHomens(z)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Quantidade de Mulheres"
                    keyboardType="numeric"
                    onChangeText={(z) => setTotalMulheres(z)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Quantidade de Crianças"
                    keyboardType="numeric"
                    onChangeText={(z) => setTotalCriancas(z)}
                />

                <TouchableOpacity style={styles.button} onPress={CalcularChurrasco}>
                    <Text style={styles.buttonText}>Calcular Churrasco</Text>
                </TouchableOpacity>
                {MostrarResultado &&
                    <>
                        <Text style={styles.resultado}>Serão necessários {TotalCarne}Kg de Carne</Text>
                        <Text style={styles.resultado}>{QtdCarneHomens}Kg para Homens</Text>
                        <Text style={styles.resultado}>{QtdCarneMulheres}Kg para Mulheres</Text>
                    </>
                }
            </ScrollView>
        </View>
    )
}