import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Head = ({ toggleMenu }) => {
  return (
    <View>
      <Text>Hola mundo</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Head;
