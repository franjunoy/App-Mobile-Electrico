import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Reader = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('ScannerQr')}>
        <Icon name='desktop' size={25} color='black' />
      </Button>
    </View>
  );
};

export default Reader;
