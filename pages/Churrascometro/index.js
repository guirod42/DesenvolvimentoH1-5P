import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import stylesGlobal from '../../styles/styles';
import Cabecalho from '../../components/Cabecalho';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../styles/colors';

export default function Churrascometro() {

    const navigation = useNavigation();

    const [TotalHomens, setTotalHomens] = useState(0);
    const [TotalMulheres, setTotalMulheres] = useState(0);
    const [TotalCriancas, setTotalCriancas] = useState(0);
    const [QtdCarneHomens, setQtdCarneHomens] = useState(0);
    const [QtdCarneMulheres, setQtdCarneMulheres] = useState(0);
    const [QtdCarneCriancas, setQtdCarneCriancas] = useState(0);
    const [QtdSacosCarvao, setQtdSacosCarvao] = useState(0);
    const [TotalCarne, setTotalCarne] = useState(0);
    const [CalculoCerto, setCalculoCerto] = useState(true);
    const [SemValores, setSemValores] = useState(true);
    const [MostrarResultado, setMostrarResultado] = useState(false);

    function CalcularChurrasco() {
        const qtdCarnePessoa = 0.4;
        const qdtCarnePorSacoCarvao = 6;
        let tHomens = TotalHomens * qtdCarnePessoa;
        let tMulheres = TotalMulheres * qtdCarnePessoa * 0.75;
        let tCriancas = TotalCriancas * qtdCarnePessoa * 0.5;
        let tCarne = (tHomens + tMulheres + tCriancas);

        let qtdCarvao = tCarne / qdtCarnePorSacoCarvao;
        let tSacosCarvao = Math.ceil(qtdCarvao);

        setQtdCarneHomens((tHomens).toFixed(2));
        setQtdCarneMulheres((tMulheres).toFixed(2));
        setQtdCarneCriancas((tCriancas).toFixed(2));
        setQtdSacosCarvao(tSacosCarvao);
        setTotalCarne(tCarne.toFixed(2));

        setCalculoCerto(true);
        setMostrarResultado(true);
        setSemValores(false);

        if (tCarne == 0) {
            setSemValores(true);
            setMostrarResultado(false);
        }

        if (tHomens < 0 || tMulheres < 0 || tCriancas < 0 || isNaN(tCarne)) {
            setCalculoCerto(false);
            setMostrarResultado(false);
        }

        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <Cabecalho title="Churrascômetro" onPress={() => navigation.goBack()} />
            <Text style={styles.textTitle}>Churrascômetro</Text>
            <ScrollView style={stylesGlobal.scrollView}>
                <TextInput
                    style={stylesGlobal.input}
                    placeholder="Quantidade de Homens"
                    keyboardType="numeric"
                    onChangeText={(z) => setTotalHomens(z)}
                />

                <TextInput
                    style={stylesGlobal.input}
                    placeholder="Quantidade de Mulheres"
                    keyboardType="numeric"
                    onChangeText={(z) => setTotalMulheres(z)}
                />

                <TextInput
                    style={stylesGlobal.input}
                    placeholder="Quantidade de Crianças"
                    keyboardType="numeric"
                    onChangeText={(z) => setTotalCriancas(z)}
                />

                <TouchableOpacity style={stylesGlobal.button} onPress={CalcularChurrasco}>
                    <Text style={stylesGlobal.buttonText}>Calcular Churrasco</Text>
                </TouchableOpacity>

                {MostrarResultado &&
                    <>
                        <Text style={stylesGlobal.resultado}>Serão necessários {TotalCarne}Kg de Carne, sendo:</Text>
                        {QtdCarneHomens > 0 && <Text style={stylesGlobal.resultado}>{QtdCarneHomens}Kg para Homens</Text>}
                        {QtdCarneMulheres > 0 && <Text style={stylesGlobal.resultado}>{QtdCarneMulheres}Kg para Mulheres</Text>}
                        {QtdCarneCriancas > 0 && <Text style={stylesGlobal.resultado}>{QtdCarneCriancas}Kg para Crianças</Text>}
                        {QtdSacosCarvao > 0 && <Text style={stylesGlobal.resultado}>Serão gastos {QtdSacosCarvao} saco(s) de carvão</Text>}
                    </>
                }
                {!CalculoCerto && <Text style={stylesGlobal.resultado}>Favor inserir os dados corretamente</Text>}
                {SemValores && <Text style={stylesGlobal.resultado}>Sem valores para calcular</Text>}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTitle: {
        color: 'red',
        fontSize: 28,
        marginBottom: 8,
    },
});

