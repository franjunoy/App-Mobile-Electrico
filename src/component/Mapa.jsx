import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Mapa from '../../assets/Mapa.png';
import { useNavigation } from '@react-navigation/native';

const FacturaElectronica = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MapaDeCortes')}
        className='w-28 h-24 border p-2 bg-electric-yellow rounded-lg '
      >
        <View>
          <View className='items-center'>
            <Image source={Mapa} className='w-10 h-10' />
          </View>
          <View className='mt-2'>
            <Text className='text-xs font-bold text-center'>
              Mapa de Cortes
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FacturaElectronica;
