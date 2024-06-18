import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Menu from '../../assets/Menu.png';
import Persona from '../../assets/Persona.png';
import Logo from '../../assets/Logo.png';
import { useNavigation } from '@react-navigation/native';

const Header = ({ toggleMenu }) => {
  const navigation = useNavigation();

  return (
    <View className='w-full h-16 bg-electric-yellow items-center flex-row justify-between px-1'>
      <View className='flex-row '>
        <TouchableOpacity onPress={toggleMenu}>
          <View>
            <Image source={Menu} className='w-16 h-16' />
          </View>
        </TouchableOpacity>
        <View>
          <Image source={Logo} className='w-16 h-16' />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <View className='border rounded-full'>
            <Image source={Persona} className='w-14 h-14' />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

export default Header;
