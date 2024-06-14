import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const FacturaElectronica = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('Soporte')}>
        <View flexDirection='colum'>
          <View>
            <Icon
              name='headset'
              size={20}
              color='black'
              padding={5}
              justifyContent='center'
              alignItems='center'
            />
          </View>
          <View>
            <Text>Soporte</Text>
            <Text>Tecnico</Text>
          </View>
        </View>
      </Button>
    </View>
  );
};

export default FacturaElectronica;
