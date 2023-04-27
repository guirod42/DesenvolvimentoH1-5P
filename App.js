import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PaginaPrincipal from './pages/PaginaPrincipal';
import CalculadoraIMC from './pages/CalculadoraIMC';
import ConversaoMoeda from './pages/ConversaoMoeda';
import ApresentandoImagem from './pages/ApresentarImagens';
import RolandoPagina from './pages/RolandoPagina';
import Churrascometro from './pages/Churrascometro';
import PaginaLogin from './pages/PaginaLogin';
import CadastroPessoa from './pages/CadastroPessoa';
import PaginaAluno from './pages/PaginaAluno';
import PaginaProfessor from './pages/PaginaProfessor';
import CadastroProjetoTCC from './pages/CadastroProjetoTCC';
import PaginaProjeto from './pages/PaginaProjeto';
import MontarSolicitacao from './pages/MontarSolicitacao';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="PaginaLogin" component={PaginaLogin} />
            <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
            <Stack.Screen name="CadastroPessoa" component={CadastroPessoa} />            
            <Stack.Screen name="CadastroProjetoTCC" component={CadastroProjetoTCC} />
            <Stack.Screen name="PaginaAluno" component={PaginaAluno} />
            <Stack.Screen name="PaginaProfessor" component={PaginaProfessor} />
            <Stack.Screen name="PaginaProjeto" component={PaginaProjeto} />
            <Stack.Screen name="MontarSolicitacao" component={MontarSolicitacao} />            
          </Stack.Navigator>
        </NavigationContainer>
  );
}