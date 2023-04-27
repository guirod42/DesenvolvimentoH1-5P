import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import React, { useState } from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default function ProfilePicture(obj) {
  return (
    <View style={styles.circle}>
      <Image source={{uri: obj.img}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  }
});