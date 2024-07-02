import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Notificaciones = () => {
  const route = useRoute();
  const { user } = route.params;
  return (
    <View className='mt-3 items-center justify-center'>
      <ScrollView>
        {user.notificaciones
          ?.slice()
          .reverse()
          .map((notificacion, index) => (
            <View
              key={index}
              className='border rounded-lg h-14 w-96 items-center justify-center mb-3'
            >
              <Text className='text-lg font-bold'>{notificacion.mensaje}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Notificaciones;
