import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const SimuladorDeConsumo = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('Calculadora')}>
        <View>
          <View>
            <Icon
              name='tachometer-alt'
              size={20}
              color='black'
              padding={5}
              justifyContent='center'
              alignItems='center'
            />
          </View>
          <View>
            <Text>Simulador de</Text>
            <Text>Consumo</Text>
          </View>
        </View>
      </Button>
    </View>
  );
};

export default SimuladorDeConsumo;
