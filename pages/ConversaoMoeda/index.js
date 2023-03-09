import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importa o pacote de ícones
import styles from '../../assets/styles';
import Cabecalho from '../../components/Cabecalho';

export default function ConversaoMoeda() {
    const navigation = useNavigation();

    const [Moeda1, setMoeda1] = useState('USD');
    const [Moeda2, setMoeda2] = useState('BRL');
    const [ExibirResultado, setExibirResultado] = useState(false);
    const [RealizarConversao, setRealizarConversao] = useState(false);
    const [ExibirConversao, setExibirConversao] = useState(false);
    const [ValorDeclarado, setValorDeclarado] = useState(300);
    const [ValorCalculado, setValorCalculado] = useState("");

    const [Name, setName] = useState();
    const [High, setHigh] = useState();
    const [Low, setLow] = useState();
    const [Bid, setBid] = useState();
    const [Ask, setAsk] = useState();
    const [CreateDate, setCreateDate] = useState();

    async function fetchData() {
        try {
            const response = await fetch('https://economia.awesomeapi.com.br/json/last/' + Moeda1 + '-' + Moeda2);
            const data = await response.json();
            const conversionData = data[`${Moeda1}${Moeda2}`];
            setName(conversionData.name);
            setHigh(conversionData.high);
            setLow(conversionData.low);
            setBid(conversionData.bid);
            setAsk(conversionData.ask);
            setCreateDate(conversionData.create_date);
            setExibirResultado(true);
            setRealizarConversao(true);
            setExibirConversao(false);
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    function CalcularConversao() {
        if (Moeda1 !== Moeda2) {
            fetchData();
            ConverterValor();
        } else {
            setExibirResultado(false);
        }
    }

    function ConverterValor() {
        if (ValorDeclarado == null || ValorDeclarado <= 0) setExibirConversao(false)
        else {
            const Temp = (ValorDeclarado / Bid);
            setValorCalculado(Temp.toFixed(2));
            setExibirConversao(true);
        }
    }

    return (
        <View style={styles.container}>
            <Cabecalho title="API Economia awesomeapi" onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.centerPage}>
                    <View style={styles.inputContainer}>
                        <Picker
                            style={styles.selecionarMoeda}
                            selectedValue={Moeda1}
                            onValueChange={(itemValue, itemIndex) => setMoeda1(itemValue)}
                        >
                            <Picker.Item label="Dólar Americano" value="USD" />
                            <Picker.Item label="Euro" value="EUR" />
                            <Picker.Item label="Real Brasileiro" value="BRL" />
                            <Picker.Item label="Dólar Canadense" value="CAD" />
                            <Picker.Item label="Iene Japonês" value="JPY" />
                        </Picker>
                        <Picker
                            style={styles.selecionarMoeda}
                            selectedValue={Moeda2}
                            onValueChange={(itemValue, itemIndex) => setMoeda2(itemValue)}
                        >
                            <Picker.Item label="Dólar Americano" value="USD" />
                            <Picker.Item label="Euro" value="EUR" />
                            <Picker.Item label="Real Brasileiro" value="BRL" />
                            <Picker.Item label="Dólar Canadense" value="CAD" />
                            <Picker.Item label="Iene Japonês" value="JPY" />
                        </Picker>
                        <TouchableOpacity style={styles.button} onPress={CalcularConversao}>
                            <Text style={styles.buttonText}>Conversão de {Moeda1} para {Moeda2}</Text>
                        </TouchableOpacity>
                        {
                            ExibirResultado &&
                            <>
                                <Text style={styles.explicacao}>
                                    {'1 ' + Moeda1 + ' vale ' + Bid + ' ' + Moeda2}
                                </Text>
                                <Text style={styles.explicacao}>
                                    {Name}
                                </Text>
                            </>
                        }
                        {
                            RealizarConversao &&
                            <>
                                <Text style={styles.explicacao}>
                                    {'Coloque um valor para fazer a conversão'}
                                </Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder={"Valor em " + Moeda2}
                                    keyboardType="numeric"
                                    onChangeText={(x) => setValorDeclarado(x)}
                                />
                                <TouchableOpacity style={styles.button} onPress={ConverterValor}>
                                    <Text style={styles.buttonText}>Converter Valor</Text>
                                </TouchableOpacity>
                            </>
                        }
                        {
                            ExibirConversao &&
                            <>
                                <Text style={styles.explicacao}>
                                    {ValorDeclarado + ' ' + Moeda2 + ' vale ' + ValorCalculado + ' ' + Moeda1}
                                </Text>
                            </>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}