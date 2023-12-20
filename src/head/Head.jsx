import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Head = ({ toggleMenu }) => {
  return (
    <View>
      <TouchableOpacity onPress={toggleMenu}>
        <Text>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Head;
