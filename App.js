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
import CadastroAluno from './pages/CadastroAluno';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="PaginaPrincipal" component={PaginaPrincipal} />
            <Stack.Screen name="PaginaLogin" component={PaginaLogin} />
            <Stack.Screen name="Churrascometro" component={Churrascometro} />
            <Stack.Screen name="CalculadoraIMC" component={CalculadoraIMC} />
            <Stack.Screen name="ConversaoMoeda" component={ConversaoMoeda} />
            <Stack.Screen name="ApresentandoImagem" component={ApresentandoImagem} />
            <Stack.Screen name="RolandoPagina" component={RolandoPagina} />
            <Stack.Screen name="CadastroAluno" component={CadastroAluno} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}