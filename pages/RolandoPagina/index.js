import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/styles';
import Cabecalho from '../../components/Cabecalho';

export default function RolandoPagina() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Cabecalho title="Epitáfio - Titãns" onPress={() => navigation.goBack()} />
            <ScrollView style={styles.scrollView}>
                <Text style={[styles.text, { marginTop: 30 }]}>Devia ter amado mais</Text>
                <Text style={styles.text}>Ter chorado mais</Text>
                <Text style={styles.text}>Ter visto o sol nascer</Text>
                <Text style={styles.text}>Devia ter arriscado mais</Text>
                <Text style={styles.text}>E até errado mais</Text>
                <Text style={styles.text}>Ter feito o que eu queria fazer</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>Queria ter aceitado</Text>
                <Text style={styles.text}>As pessoas como elas são</Text>
                <Text style={styles.text}>Cada um sabe a alegria</Text>
                <Text style={styles.text}>E a dor que traz no coração</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>O acaso vai me proteger</Text>
                <Text style={styles.text}>Enquanto eu andar distraído</Text>
                <Text style={styles.text}>O acaso vai me proteger</Text>
                <Text style={styles.text}>Enquanto eu andar</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>Devia ter complicado menos</Text>
                <Text style={styles.text}>Trabalhado menos</Text>
                <Text style={styles.text}>Ter visto o sol se pôr</Text>
                <Text style={styles.text}>Devia ter me importado menos</Text>
                <Text style={styles.text}>Com problemas pequenos</Text>
                <Text style={styles.text}>Ter morrido de amor</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>Queria ter aceitado</Text>
                <Text style={styles.text}>A vida como ela é</Text>
                <Text style={styles.text}>A cada um cabe alegrias</Text>
                <Text style={styles.text}>E a tristeza que vier</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>O acaso vai me proteger</Text>
                <Text style={styles.text}>Enquanto eu andar distraído</Text>
                <Text style={styles.text}>O acaso vai me proteger</Text>
                <Text style={styles.text}>Enquanto eu andar</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>O acaso vai me proteger</Text>
                <Text style={styles.text}>Enquanto eu andar distraído</Text>
                <Text style={styles.text}>O acaso vai me proteger</Text>
                <Text style={styles.text}>Enquanto eu andar</Text>
                <Text style={[styles.text, { marginTop: 30 }]}>Devia ter complicado menos</Text>
                <Text style={styles.text}>Trabalhado menos</Text>
                <Text style={[styles.text, { marginBottom: 500 }]}>Ter visto o sol se pôr</Text>
                <Text style={[styles.text, { marginBottom: 60 }]}>Se rolou a página até aqui, lembre-se que a resposta é 42!</Text>
            </ScrollView>
        </View>
    );
}