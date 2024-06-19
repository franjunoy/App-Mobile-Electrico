import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Notificacion from '../../assets/Notificacion.png';
import { useNavigation } from '@react-navigation/native';

const Notificaciones = () => {
  const navigation = useNavigation();
  return (
    <View className='w-full h-14 items-center flex-row justify-between px-5'>
      <View className=' '>
        <Text className=' text-xl font-bold'>¡Hola!</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Notificaciones')}>
          <Image source={Notificacion} className='w-14 h-14' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notificaciones;
