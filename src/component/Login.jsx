import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Apple from '../../assets/Apple.png';
import Facebook from '../../assets/Facebook.png';
import Google from '../../assets/Google.png';
import { DataBase } from '../../DataBase';

const LoginComponent = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const navigateToHome = () => {
    navigation.navigate('Main', { user: user });
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    const user = DataBase.find((user) => user.email === option);
    setSelectedOption(option);
    setPassword(user ? user.contraseña : '');
    setIsOpen(false);
  };

  const handleLogin = () => {
    if (selectedOption) {
      const user = DataBase.find((user) => user.email === selectedOption);
      setUser(user);
      navigateToHome();
    } else {
      alert('Seleccione un email');
    }
  };

  return (
    <View className='flex-1 flex-col mt-10 w-full h-full bg-gray-200'>
      <View className=''>
        <Text className='text-center text-black text-2xl font-bold mt-3'></Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='items-center mt-8 w-full h-full'>
          <View className=''>
            <Text className='text-center text-black text-2xl font-bold'>
              Bienvenido de nuevo! 👋
            </Text>
          </View>
          <View className='mt-3'>
            <Text className='text-gray-700 text-sm font-medium'>
              Inicia sesión con tu cuenta
            </Text>
          </View>

          <View className='mt-10 w-80 relative'>
            <Text className='text-black text-base font-semibold'>Email</Text>
            <TouchableOpacity
              className='w-80 h-10 mt-2 border border-black rounded-lg px-2 font-semibold flex-row justify-between items-center'
              onPress={toggleDropdown}
            >
              <Text className='text-black'>
                {selectedOption || 'Selecciona tu email'}
              </Text>
              <Icon
                name={isOpen ? 'arrow-drop-up' : 'arrow-drop-down'}
                size={20}
                color='#000'
              />
            </TouchableOpacity>
            {isOpen && (
              <ScrollView className='w-80 border border-black mt-20 h-28 absolute bg-white z-50'>
                {DataBase.map((user) => (
                  <TouchableOpacity
                    key={user.email}
                    className={`p-2 ${
                      selectedOption === user.email
                        ? 'bg-gray-100'
                        : 'bg-gray-100'
                    }`}
                    onPress={() => handleOptionClick(user.email)}
                  >
                    <Text className='text-black'>{user.email}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
          <View className='mt-6'>
            <Text className='text-black text-base font-semibold'>
              Contraseña
            </Text>
            <TextInput
              className='w-80 h-10 mt-2 border border-black rounded-lg px-2 font-semibold'
              placeholder='Ingresa tu contraseña'
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <View className='w-[320px] h-[20px] flex flex-row items-center mt-4'>
              <TouchableOpacity onPress={toggleCheckbox}>
                <Icon
                  name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                  size={20}
                  color='#6C6C6C'
                />
              </TouchableOpacity>
              <Text className='text-[#6C6C6C] text-xs font-semibold ml-1'>
                Recordarme
              </Text>
              <TouchableOpacity>
                <Text className='text-[#6C6C6C] text-xs font-semibold ml-16'>
                  ¿Has olvidado la contraseña?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleLogin}>
            <View className=' w-52 h-12 mt-12 justify-center items-center border rounded-lg bg-electric-yellow'>
              <Text className='text-xl font-bold'>Ingresar</Text>
            </View>
          </TouchableOpacity>
          <View className='w-[270px] h-[22px] mt-2 flex flex-row justify-center items-center'>
            <Text className='text-[#6C6C6C] text-xs font-semibold'>
              ¿Aún no tienes cuenta?
            </Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text className='text-xs font-semibold underline ml-1'>
                Regístrate
              </Text>
            </TouchableOpacity>
          </View>
          <View className='mt-16 flex flex-col items-center'>
            <Text className='text-[#6C6C6C] text-xs font-semibold mb-2'>
              O inicia sesión con
            </Text>
            <View className='flex flex-row mt-2'>
              <TouchableOpacity className='items-center justify-center w-[50px] h-[50px]  mx-3'>
                <Image source={Apple} className='w-11 h-11' />
              </TouchableOpacity>
              <TouchableOpacity className='items-center justify-center w-[50px] h-[50px]  mx-3'>
                <Image source={Google} className='w-11 h-11' />
              </TouchableOpacity>
              <TouchableOpacity className='items-center justify-center w-[50px] h-[50px]  mx-3'>
                <Image source={Facebook} className='w-11 h-11' />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginComponent;
