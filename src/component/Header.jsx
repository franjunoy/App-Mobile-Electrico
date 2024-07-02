import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Menu from '../../assets/Menu.png';
import Logo from '../../assets/Logo.png';
import { useNavigation } from '@react-navigation/native';

const Header = ({ toggleMenu, user }) => {
  const navigation = useNavigation();

  const navigateToPerfil = () => {
    navigation.navigate('Perfil', { user: user });
  };

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
        <TouchableOpacity
          onPress={navigateToPerfil}
          className='border rounded-full h-16 w-16 items-center justify-center'
        >
          <View>
            <Image source={user?.foto} className='w-12 h-12' />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

export default Header;
