import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Perfil = () => {
  return (
    <View className='items-center flex-1 bg-gray-100'>
      <View className='flex flex-col p-4'>
        <View className='items-start mt-2'>
          <Text className='text-xl font-bold text-teal-900'>Mi perfil</Text>
        </View>

        <View className='flex flex-row items-center mt-4'>
          <View className='items-start mt-10'>
            <Text className='text-lg font-bold text-teal-900'>Nombre</Text>
            <Text className='text-sm text-gray-600'>Email</Text>
          </View>
          <View className='mb-10'></View>
        </View>

        <View className='items-center'>
          <View className='flex flex-col space-y-8 items-center'>
            <View className='flex flex-row items-center w-64 justify-between'>
              <Text className='text-teal-900 text-xl font-bold ml-3'>
                Sobre mi cuenta
              </Text>
              <View className='flex-grow' />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <Text className='text-teal-900 text-xl font-bold ml-3'>
                Mi Curso
              </Text>
              <View className='flex-grow' />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <Text className='text-teal-900 text-xl font-bold ml-3'>
                Configurar datos Personales
              </Text>
              <View className='flex-grow' />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <Text className='text-teal-900 text-xl font-bold ml-3 '>
                Invitar a un amigo
              </Text>
              <View className='flex-grow' />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <Text className='text-teal-900 text-xl font-bold ml-3 '>
                Cerrar sesion
              </Text>
              <View className='flex-grow' />
              <TouchableOpacity></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className=' items-center mt-24'>
        <Text className='text-[#6C6C6C] text-xs'>
          Privacy Policy Terms and Conditions
        </Text>
      </View>
    </View>
  );
};

export default Perfil;
