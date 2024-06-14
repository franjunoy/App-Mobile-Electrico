import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Notificaciones = () => {
  return (
    <View>
      <Text className='text-lg'>¡Hola!</Text>
      <Button>
        <Icon name='bell' size={25} color='black' />
      </Button>
    </View>
  );
};

export default Notificaciones;
