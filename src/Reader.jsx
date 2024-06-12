import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Reader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        color='transparent'
        onPress={() => navigation.navigate('ScannerQr')}
      >
        <Icon name='desktop' size={25} color='black' />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  text: {
    marginRight: 250,
    fontSize: 20
  }
});

export default Reader;
