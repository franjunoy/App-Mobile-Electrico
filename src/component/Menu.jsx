import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Apagar from '../../assets/Apagar.png';
import Home from '../../assets/Home.png';
import Pagos from '../../assets/Pagos.png';
import Factura from '../../assets/Factura.png';
import Preguntas from '../../assets/Preguntas.png';
import Informacion from '../../assets/Informacion.png';
import Configuracion from '../../assets/Configuracion.png';

const Menu = ({ isOpen, toggleMenu }) => {
  const { height } = Dimensions.get('window');
  const marginTopClass = height >= 949 ? 'mt-32' : 'mt-11';
  return (
    <View className='flex-row'>
      <View className='h-full w-64 border bg-gray-200'>
        <GestureHandlerRootView>
          {isOpen && (
            <View>
              <View className='flex-row h-16 justify-between border-b-2 p-2 bg-electric-yellow items-center'>
                <View className='items-start'>
                  <Text className='text-lg font-bold'>
                    Cooperativa Eléctrica
                  </Text>
                </View>
                <View className=''>
                  <TouchableOpacity onPress={toggleMenu}>
                    <Text className='text-xl font-bold'>X</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='mt-4'>
                <View>
                  <TouchableOpacity className='flex-row items-center justify-between p-1'>
                    <Text className='text-xl font-bold'>Home</Text>
                    <Image source={Home} className='w-8 w h-8' />
                  </TouchableOpacity>
                </View>
                <View className='mt-4'>
                  <TouchableOpacity className='flex-row items-center justify-between p-1'>
                    <Text className='text-xl font-bold'>Mis Pagos</Text>
                    <Image source={Pagos} className='w-9 w h-9' />
                  </TouchableOpacity>
                </View>
                <View className='mt-4'>
                  <TouchableOpacity className='flex-row items-center justify-between p-1'>
                    <Text className='text-xl font-bold'>
                      Factuira Electronica
                    </Text>
                    <Image source={Factura} className='w-10 w h-10' />
                  </TouchableOpacity>
                </View>
                <View className='mt-4'>
                  <TouchableOpacity className='flex-row items-center justify-between p-1'>
                    <Text className='text-xl font-bold'>
                      Preguntas frecuentes
                    </Text>
                    <Image source={Preguntas} className='w-9 w h-9' />
                  </TouchableOpacity>
                </View>
                <View className='mt-4'>
                  <TouchableOpacity className='flex-row items-center justify-between p-1'>
                    <Text className='text-xl font-bold'>Informacion</Text>
                    <Image source={Informacion} className='w-9 w h-9' />
                  </TouchableOpacity>
                </View>
                <View className='mt-4'>
                  <TouchableOpacity className='flex-row items-center justify-between p-1'>
                    <Text className='text-xl font-bold'>Configuraciones</Text>
                    <Image source={Configuracion} className='w-9 w h-9' />
                  </TouchableOpacity>
                </View>
              </View>

              <View className={marginTopClass}></View>

              <View className='flex-row h-16 justify-between p-2 border-y-2 bg-electric-yellow items-center mt-80'>
                <View>
                  <Text className='text-lg font-bold'>Salir</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    <Image source={Apagar} className='w-10 w h-10' />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </GestureHandlerRootView>
      </View>
      <View className='bg-transparent h-full w-40'>
        <TouchableOpacity onPress={toggleMenu}>
          <View className='h-full w-full'></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;
