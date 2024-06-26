import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Apple from '../../assets/Apple.png';
import Facebook from '../../assets/Facebook.png';
import Google from '../../assets/Google.png';
import { useNavigation } from '@react-navigation/native';

const RegisterComponent = () => {
  const [name, setName] = useState('');
  const [afliado, setAfliado] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedOption, setSlectedOption] = useState();
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Main');
  };

  navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegister = async () => {};

  return (
    <View className='flex-1 flex-col mt-8 w-full h-full bg-gray-200'>
      <View className=''>
        <Text className='text-center text-black text-2xl font-bold mt-3'></Text>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='items-center mt-10 w-full h-full'>
          <View className=''>
            <Text className='text-center text-black text-2xl font-bold'>
              Registrate
            </Text>
          </View>
          <View className='mt-3'>
            <Text className='text-gray-700 text-sm font-medium'>
              Comienza hoy tu cuenta
            </Text>
          </View>
          <View className='mt-5'>
            <Text className='text-black text-base font-semibold'>Nombre</Text>
            <TextInput
              className='w-80 h-10 mt-2 border border-black rounded-lg px-2 font-semibold'
              placeholder='Ingresa tu nombre'
              value={name}
              onChangeText={setName}
              keyboardType='default'
              autoCapitalize='none'
            />
          </View>

          <View className='mt-3'>
            <Text className='text-black text-base font-semibold'>
              Numero de Afiliado
            </Text>
            <TextInput
              className='w-80 h-10 mt-2 border border-black rounded-lg px-2 font-semibold'
              placeholder='Ingresa tu número de afiliado'
              value={afliado}
              onChangeText={setAfliado}
              keyboardType='numeric'
              autoCapitalize='none'
            />
          </View>

          <View className='mt-3'>
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

          <View className='top-3'>
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
          </View>
          <TouchableOpacity onPress={navigateToLogin}>
            <View className=' w-52 h-12 mt-12 justify-center items-center border rounded-lg bg-electric-yellow'>
              <Text className='text-xl font-bold'>Crear Cuenta</Text>
            </View>
          </TouchableOpacity>
          <View className='w-[270px] h-[22px] mt-2 flex flex-row justify-center items-center'>
            <Text className='text-[#6C6C6C] text-xs font-semibold'>
              ¿Ya tienes cuenta?
            </Text>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text className='text-xs font-semibold underline ml-1'>
                Ingresa
              </Text>
            </TouchableOpacity>
          </View>

          <View className='mt-10 flex flex-col items-center'>
            <Text className='text-[#6C6C6C] text-xs font-semibold mb-2'>
              O registrate con
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

          <View className=' items-center justify-center mt-10 flex flex-col'>
            <Text className='text-[#6C6C6C] text-x'>
              Al registrarte aceptas nuestros
            </Text>
            <TouchableOpacity>
              <Text className='border-black text-x underline'>
                terminos y condiciones de uso
              </Text>
            </TouchableOpacity>
          </View>
          <View className='h-[180px]'></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterComponent;
