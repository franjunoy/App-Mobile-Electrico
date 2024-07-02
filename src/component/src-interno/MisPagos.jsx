import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MisPagos = () => {
  const route = useRoute();
  const { user } = route.params;

  return (
    <View className='mt-3 items-center justify-center'>
      <ScrollView>
        {user.misPagos
          ?.slice()
          .reverse()
          .map((pagos, index) => (
            <View
              key={index}
              className='border rounded-lg h-32 w-56 items-center justify-center mb-3'
            >
              <Text className='text-lg font-bold'>{pagos.descripcion}</Text>
              <Text className='text-base font-semibold'>${pagos.monto}</Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default MisPagos;
