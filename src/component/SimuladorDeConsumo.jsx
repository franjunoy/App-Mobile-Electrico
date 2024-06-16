import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Calculadora from '../../assets/Calculadora.png';
import { useNavigation } from '@react-navigation/native';

const SimuladorDeConsumo = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Calculadora')}
        className='w-28 h-24 border p-2 bg-electric-yellow rounded-lg'
      >
        <View>
          <View className='items-center'>
            <Image source={Calculadora} className='w-11 h-11' />
          </View>
          <View className='mt-1'>
            <Text className='text-xs font-bold text-center'>
              Simulador de Consumo
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SimuladorDeConsumo;
