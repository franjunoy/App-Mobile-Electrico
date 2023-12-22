import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Notificaciones = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola!</Text>
      <Button color='transparent'>
        <Icon name='bell' size={25} color='black' />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20
  },

  text: {
    marginRight: 250,
    fontFamily: 'Helvetica-Bold',
    fontSize: 20
  }
});

export default Notificaciones;
