import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Factura from '../../assets/Factura.png';

const FacturaElectronica = () => {
  const navigation = useNavigation();
  return (
    <View className='w-full h-36 items-center justify-center'>
      <TouchableOpacity
        onPress={() => navigation.navigate('PagarFactura')}
        className='w-64 h-28 border p-2 bg-electric-yellow rounded-lg items-center'
      >
        <View>
          <Image source={Factura} className='w-16 w h-16' />
        </View>
        <View>
          <Text className='text-lg font-bold'>Factura electronica</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FacturaElectronica;
