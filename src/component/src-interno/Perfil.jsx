import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Persona from '../../../assets/Persona.png';
import Persona2 from '../../../assets/Persona2.png';
import Flecha from '../../../assets/Flecha.png';
import Linea from '../../../assets/Linea.png';
import Seguridad from '../../../assets/Seguridad.png';
import Mapa from '../../../assets/Mapa.png';
import Tarjeta from '../../../assets/Tarjeta.png';
import Enviar from '../../../assets/Enviar.png';
import { useRoute } from '@react-navigation/native';

const Perfil = () => {
  const route = useRoute();
  const { user } = route.params;
  return (
    <View className='items-center flex-1 bg-gray-200'>
      <View className='flex flex-col p-4'>
        <View className='flex flex-row items-center mt-4 ml-16'>
          <TouchableOpacity className='border rounded-full h-32 w-32 items-center justify-center'>
            <View>
              <Image source={user.foto} className=' w-24 h-24' />
            </View>
          </TouchableOpacity>
          <View className='items-start mt-10 ml-3'>
            <Text className='text-xl text font-bold'>{user.nombre}</Text>
            <Text className='text-base text-gray-600'>{user.email}</Text>
          </View>
        </View>

        <View className=' mt-10 items-center'>
          <Image source={Linea} className='w-96  items-center' />
        </View>

        <View className='mt-10'>
          <View className='flex flex-col space-y-8 items-center'>
            <TouchableOpacity>
              <View className='flex flex-row items-center w-64 justify-between'>
                <Image source={Persona2} className='w-8 h-8' />

                <Text className='text-xl font-bold '>Datos de tu cuenta</Text>

                <Image source={Flecha} className=' w-8 h-8 ' />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className='flex flex-row items-center w-64 justify-between'>
                <Image source={Seguridad} className='w-9 h-9' />

                <Text className='text-xl font-bold ml-2'>Seguridad</Text>

                <Image source={Flecha} className=' w-8 h-8 ' />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className='flex flex-row items-center w-64 justify-between'>
                <Image source={Mapa} className='w-9 h-9' />
                <Text className='text-xl font-bold '>Cambiar domicilio</Text>

                <Image source={Flecha} className=' w-8 h-8 ' />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className='flex flex-row items-center w-64 justify-between'>
                <Image source={Tarjeta} className='w-9 h-9' />
                <Text className='text-xl font-bold'>Tarjetas</Text>

                <Image source={Flecha} className=' w-8 h-8 ' />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View className='flex flex-row items-center w-64 justify-between'>
                <Image source={Enviar} className='w-9 h-9' />
                <Text className='text-xl font-bold '>Invitar a un amigo</Text>

                <Image source={Flecha} className=' w-8 h-8 ' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Perfil;
