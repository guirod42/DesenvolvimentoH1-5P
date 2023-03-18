import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/styles';
import Cabecalho from '../../components/Cabecalho';

export default function CalculadoraIMC() {
    const navigation = useNavigation();

    const [idade, setIdade] = useState(0);
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState('');
    const [emoticon, setEmoticon] = useState('');
    const [condicao, setCondicao] = useState('');
    const [faixaPeso, setFaixaPeso] = useState('');
    const [exibirBotaoFaixaPeso, setExibirBotaoFaixaPeso] = useState(false);
    const [exibirFaixaPeso, setExibirFaixaPeso] = useState(false);
    const [sexo, setSexo] = useState('');

    let tabelaIMC = [];
    tabelaIMC[0] = { min: 0, max: 18.5, descricao: 'Abaixo do peso Normal', emoticon: '😫' }
    tabelaIMC[1] = { min: 18.5, max: 24.9, descricao: 'Peso normal', emoticon: '😁' }
    tabelaIMC[2] = { min: 24.9, max: 29.9, descricao: 'Excesso de peso', emoticon: '🤨' }
    tabelaIMC[3] = { min: 29.9, max: 34.9, descricao: 'Obesidade Classe I', emoticon: '😶' }
    tabelaIMC[4] = { min: 34.9, max: 39.9, descricao: 'Obesidade Classe II', emoticon: '🤐' }
    tabelaIMC[5] = { min: 39.9, max: 99.9, descricao: 'Obesidade Classe III', emoticon: '😨' }

    function CalculaIMC() {
        const calculoIMC = peso / ((altura * altura));
        setResultado('Seu IMC é ' + calculoIMC.toFixed(2));
        setExibirFaixaPeso(false);

        if (peso <= 0 || altura <= 0) {
            setCondicao('Não é possível calcular seu IMC');
            setResultado('Insira corretamente seus dados');
            setExibirBotaoFaixaPeso(false);
        }

        else {
            let resultadoIMC = tabelaIMC.find(item => calculoIMC >= item.min && calculoIMC < item.max);
            setCondicao(resultadoIMC.descricao);
            setResultado('Seu IMC é ' + calculoIMC.toFixed(2));
            setEmoticon(resultadoIMC.emoticon);
            setExibirBotaoFaixaPeso(true);
        }
        Keyboard.dismiss();
    }

    function CalculaFaixaPeso() {
        const pesoMinimo = 18.5 * altura * altura;
        const pesoMaximo = 24.9 * altura * altura;
        setFaixaPeso(`Sua faixa de peso saudável é ${pesoMinimo.toFixed(1)}kg a ${pesoMaximo.toFixed(1)}kg`);
        setExibirFaixaPeso(true);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <Cabecalho title="Calculadora IMC" onPress={() => navigation.goBack()} />
            <ScrollView>
                <View style={styles.centerPage}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Sua idade"
                            keyboardType="numeric"
                            onChangeText={(x) => setIdade(x)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Sua altura"
                            keyboardType="numeric"
                            onChangeText={(y) => setAltura(y)}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Seu peso"
                            keyboardType="numeric"
                            onChangeText={(z) => setPeso(z)}
                        />
                        <View style={styles.input}>
                            <Picker style={styles.selecionaSexo}
                                selectedValue={sexo}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSexo(itemValue)
                                }>
                                <Picker.Item label="Masculino" value="M" />
                                <Picker.Item label="Feminino" value="F" />
                            </Picker>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={CalculaIMC}>
                            <Text style={styles.buttonText}>Calcular IMC</Text>
                        </TouchableOpacity>

                        <Text style={styles.resultado}>{condicao}</Text>
                        <Text style={styles.explicacao}>{resultado}</Text>
                        <Text style={styles.explicacao}>{emoticon}</Text>
                        {
                            exibirBotaoFaixaPeso &&
                            <TouchableOpacity style={styles.button} onPress={CalculaFaixaPeso}>
                                <Text style={styles.buttonText}>Ver faixa de peso</Text>
                            </TouchableOpacity>
                        }
                        {
                            exibirFaixaPeso && <>
                                <Text style={styles.resultado}>{faixaPeso}</Text>
                            </>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}