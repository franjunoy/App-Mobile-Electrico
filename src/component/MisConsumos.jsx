import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Consumo from '../../assets/Consumo.png';
import { useNavigation } from '@react-navigation/native';

const MisConsumos = () => {
  const navigation = useNavigation();

  return (
    <View className='w-full h-36 items-center justify-center'>
      <TouchableOpacity
        onPress={() => navigation.navigate('MisConsumos')}
        className='w-64 h-28 border p-2 bg-electric-yellow rounded-lg items-center'
      >
        <View>
          <Image source={Consumo} className='w-16 h-16' />
        </View>
        <View>
          <Text className='text-lg font-bold'>Mis consumos</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MisConsumos;
