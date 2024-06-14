import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Icon } from '@rneui/themed';
import Logo from '../../assets/Logo.png';

const Header = ({ toggleMenu }) => {
  return (
    <View className='w-full h-16 bg-electric-yellow items-center flex-row '>
      <View className='flex-row left-2 items-center'>
        <TouchableOpacity onPress={toggleMenu} className=''>
          <Image source={Logo} className=' w-10 h-10' />
        </TouchableOpacity>
        <Image source={Logo} className=' w-10 h-10 left-2' />
      </View>
      <View className='left-80'>
        <TouchableOpacity>
          <Icon name='person' color='black' size={35} alignItems='center' />
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

export default Header;
