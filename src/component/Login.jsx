import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

  return (
    <View className='flex flex-col items-center'>
      <View className='flex flex-row items-center w-full'>
        <View className='flex-1 mr-14'>
          <Text className='text-center text-zinc-900 text-xl font-bold mt-3'>
            Iniciar sesión
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className='flex-1 justify-center items-center'>
          <View className='w-[358px] h-full items-center mt-2'>
            <View className='h-[40px] justify-center items-start'>
              <Text className='text-center text-teal-900 text-2xl font-bold'>
                Bienvenido de nuevo! 👋
              </Text>
            </View>
            <View className='h-[65px] justify-center items-start'>
              <Text className='text-gray-500 text-sm'>
                Inicia sesión con tu cuenta
              </Text>
            </View>
            <View>
              <Text className='text-teal-900 text-base'>Email</Text>
              <TextInput
                className='w-[320px] mt-2 h-[40px] border border-teal-900 rounded-lg px-2'
                placeholder='Ingresa tu email'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                autoCapitalize='none'
              />
            </View>
            <View className='mt-6'>
              <Text className='text-teal-900 text-base'>Contraseña</Text>
              <TextInput
                className='w-[320px] mt-2 h-[40px] border border-teal-900 rounded-lg px-2'
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
                <Text className='text-[#6C6C6C] text-xs ml-2'>Recordarme</Text>
                <TouchableOpacity>
                  <Text className='text-[#6C6C6C] text-xs ml-14'>
                    ¿Has olvidado la contraseña?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className='w-[300px] h-[50px] mt-12 justify-center items-center'>
              <Button text='Ingresar' onPress={navigateToHome} />
            </View>
            <View className='w-[270px] h-[22px] mt-2 flex flex-row justify-center items-center'>
              <Text className='text-[#6C6C6C] text-xs'>
                ¿Aún no tienes cuenta?
              </Text>
              <TouchableOpacity /* onPress={navigateToRegister} */>
                <Text className='border-teal-900 text-xs underline ml-1'>
                  Regístrate
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View className='mt-16 flex flex-col items-center'>
              <Text className='text-[#6C6C6C] text-xs mb-2'>
                O inicia sesión con
              </Text>
              <View className='flex flex-row mt-2'>
                <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                  <GoogleSVG />
                </TouchableOpacity>
                <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                  <AppleSVG />
                </TouchableOpacity>
                <TouchableOpacity className='items-center justify-center border rounded-full w-[50px] h-[50px] border-gray-300 bg-gray-200 mx-2'>
                  <FacebookSVG />
                </TouchableOpacity>
              </View>
            </View> */}
            <View className='h-[150px]'></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginComponent;
