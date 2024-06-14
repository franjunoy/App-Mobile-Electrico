import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const FacturaElectronica = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('MapaDeCortes')}>
        <View>
          <View>
            <Icon
              name='map-marked-alt'
              size={20}
              color='black'
              padding={5}
              justifyContent='center'
              alignItems='center'
            />
          </View>
          <View>
            <Text>Mapa de</Text>
            <Text>Cortes</Text>
          </View>
        </View>
      </Button>
    </View>
  );
};

export default FacturaElectronica;
