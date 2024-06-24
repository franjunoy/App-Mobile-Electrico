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

const LoginComponent = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = () => {};

  const navigateToHome = () => {
    navigation.navigate('Main');
  };

  navigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View className='flex-1 flex-col mt-10 w-full h-full bg-gray-200'>
      <View className=''>
        <Text className='text-center text-black text-2xl font-bold mt-3'>
          Iniciar sesión
        </Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='items-center mt-20 w-full h-full'>
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
          <View className='mt-10'>
            <Text className='text-black text-base font-semibold'>Email</Text>
            <TextInput
              className='w-80 h-10 mt-2 border border-black rounded-lg px-2 font-semibold'
              placeholder='Ingresa tu email'
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              autoCapitalize='none'
            />
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
          <View className=' w-52 h-12 mt-12 justify-center items-center border rounded-lg bg-electric-yellow'>
            <TouchableOpacity onPress={navigateToHome}>
              <Text className='text-xl font-bold'>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View className='w-[270px] h-[22px] mt-2 flex flex-row justify-center items-center'>
            <Text className='text-[#6C6C6C] text-xs font-semibold'>
              ¿Aún no tienes cuenta?
            </Text>
            <TouchableOpacity onPress={navigateToRegister}>
              <Text className='border-black text-xs font-semibold underline ml-1'>
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
