import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PagarFactura = () => {
  const route = useRoute();
  const { user } = route.params;

  return (
    <View className='mt-3 items-center justify-center'>
      <ScrollView>
        {user.user.facturasElectronicas
          ?.slice()
          .reverse()
          .map((factura, index) => (
            <View
              key={index}
              className='border rounded-lg h-32 w-56 items-center justify-center mb-3'
            >
              <Text className='text-lg font-bold'>{factura.descripcion}</Text>
              <Text className='text-base font-semibold'>${factura.monto}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default PagarFactura;
