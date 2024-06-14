import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Notificaciones = () => {
  return (
    <View className='flex-row h-20 bg-slate-700 items-center'>
      <Text className='text-lg left-2 items-center'>¡Hola!</Text>
      <TouchableOpacity className=' items-center'>
        <Icon name='bell' size={25} color='black' />
      </TouchableOpacity>
    </View>
  );
};

export default Notificaciones;
