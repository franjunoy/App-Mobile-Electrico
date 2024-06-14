import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const FacturaElectronica = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button onPress={() => navigation.navigate('PagarFactura')}>
        <View>
          <Icon name='receipt' size={40} color='black' marginRight={20} />
          <View>
            <Text>Factura </Text>
            <Text>electronica</Text>
          </View>
        </View>
        <Icon name='chevron-right' size={25} color='black' marginLeft={40} />
      </Button>
    </View>
  );
};

export default FacturaElectronica;
