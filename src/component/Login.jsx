import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BarraDeAbajo from '../../components/ReusableComponents/BarraDeAbajo';
import { useSelector } from 'react-redux';
import FotoPerfilSVG from '../../../assets/svg/perfil/FotoPerfilSVG';
import EditarSVG from '../../../assets/svg/perfil/EditarSVG';
import LineaSVG from '../../../assets/svg/perfil/LineaSVG';
import FelchaSVG from '../../../assets/svg/perfil/FelchaSVG';
import TarjetaSVG from '../../../assets/svg/perfil/TarjetaSVG';
import MiCursoSVG from '../../../assets/svg/perfil/MiCursoSVG';
import ConfigurarSVG from '../../../assets/svg/perfil/ConfigurarSVG';
import InvitarSVG from '../../../assets/svg/perfil/InvitarSVG';
import CerrarSesionSVG from '../../../assets/svg/perfil/CerrarSesionSVG';

const PerfilScreen = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <View className='items-center flex-1 bg-gray-100'>
      <View className='flex flex-col p-4'>
        <View className='items-start mt-2'>
          <Text className='text-xl font-bold text-teal-900'>Mi perfil</Text>
        </View>

        <View className='flex flex-row items-center mt-4'>
          <FotoPerfilSVG />
          <View className='items-start mt-10'>
            <Text className='text-lg font-bold text-teal-900'>{user.name}</Text>
            <Text className='text-sm text-gray-600'>{user.email}</Text>
          </View>
          <View className='mb-10'>
            <EditarSVG />
          </View>
        </View>
        <View className=' mt-1 mb-8'>
          <LineaSVG />
        </View>

        <View className='items-center'>
          <View className='flex flex-col space-y-8 items-center'>
            <View className='flex flex-row items-center w-64 justify-between'>
              <TarjetaSVG />
              <Text className='text-teal-900 text-xl font-bold ml-3'>
                Sobre mi cuenta
              </Text>
              <View className='flex-grow' />
              <FelchaSVG />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <MiCursoSVG />
              <Text className='text-teal-900 text-xl font-bold ml-3'>
                Mi Curso
              </Text>
              <View className='flex-grow' />
              <FelchaSVG />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <ConfigurarSVG />
              <Text className='text-teal-900 text-xl font-bold ml-3'>
                Configurar datos Personales
              </Text>
              <View className='flex-grow' />
              <FelchaSVG />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <InvitarSVG />
              <Text className='text-teal-900 text-xl font-bold ml-3 '>
                Invitar a un amigo
              </Text>
              <View className='flex-grow' />
              <FelchaSVG />
            </View>
            <View className='flex flex-row items-center w-64 justify-between'>
              <CerrarSesionSVG />
              <Text className='text-teal-900 text-xl font-bold ml-3 '>
                Cerrar sesion
              </Text>
              <View className='flex-grow' />
              <TouchableOpacity>
                <FelchaSVG />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View className=' items-center mt-24'>
        <Text className='text-[#6C6C6C] text-xs'>
          Privacy Policy Terms and Conditions
        </Text>
      </View>

      <View className='absolute bottom-0 w-full'>
        <BarraDeAbajo />
      </View>
    </View>
  );
};

export default PerfilScreen;
