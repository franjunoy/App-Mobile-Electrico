import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Soporte from '../../assets/Soporte.png';
import { useNavigation } from '@react-navigation/native';

const FacturaElectronica = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Soporte')}
        className='w-28 h-24 border p-2 bg-electric-yellow rounded-lg'
      >
        <View>
          <View className='items-center'>
            <Image source={Soporte} className='w-10 h-10' />
          </View>
          <View className='mt-2'>
            <Text className='text-xs font-bold text-center'>
              Soporte Tecnico
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FacturaElectronica;
