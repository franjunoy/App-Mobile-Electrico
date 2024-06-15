import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Scanner from '../../assets/Scanner.png';
import { useNavigation } from '@react-navigation/native';

const Reader = () => {
  const navigation = useNavigation();

  return (
    <View className='items-center bg-gray-200'>
      <View className='border p-2 bg-electric-yellow rounded-lg'>
        <TouchableOpacity onPress={() => navigation.navigate('ScannerQr')}>
          <Image source={Scanner} className='w-20 h-20' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reader;
