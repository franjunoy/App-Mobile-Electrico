import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native';

const PaginaWeb = () => {
  const abrirPaginaWeb = () => {
    const url = 'https://www.celp.com.ar/';
    Linking.openURL(url);
  };
  return (
    <View className='w-full h-36 items-center justify-center'>
      <View>
        <Text className='text-base font-bold'>Visita nuestra página web</Text>
        <TouchableOpacity onPress={abrirPaginaWeb}>
          <Text className='text-base font-bold underline text-electric-yellow'>
            https://www.celp.com.ar/
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaginaWeb;
