import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityProps, Image } from 'react-native';
import React, { useState } from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export default function ProfilePicture(props) {
  return (
    <View style={styles.circle}>
      <Image source={{uri: props.uri}} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#CCC',
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  }
});