import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/styles';

const EstruturaPersonagem = (props) => {
  const { name, level, profession, strength } = props;

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Level:</Text>
        <Text>{level}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Profession:</Text>
        <Text>{profession}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Strength:</Text>
        <Text>{strength}</Text>
      </View>
    </View>
  );
};

export default EstruturaPersonagem;