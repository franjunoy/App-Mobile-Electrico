import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Notificacion from '../../assets/Notificacion.png';

const Notificaciones = () => {
  return (
    <View className='w-full h-14 items-center flex-row justify-between px-5'>
      <View className=' '>
        <Text className=' text-xl text-electric-yellow font-bold'>¡Hola!</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={Notificacion} className='w-14 h-14' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notificaciones;
