import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MisConsumos = () => {
  const route = useRoute();
  const { user } = route.params;
  return (
    <View className='mt-3 items-center justify-center'>
      <ScrollView>
        {user.user.misConsumos
          ?.slice()
          .reverse()
          .map((consumos, index) => (
            <View
              key={index}
              className='border rounded-lg h-32 w-56 items-center justify-center mb-3'
            >
              <Text className='text-lg font-bold'>{consumos.descripcion}</Text>
              <Text className='text-base font-semibold'>
                {consumos.consumo}KWh
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default MisConsumos;
