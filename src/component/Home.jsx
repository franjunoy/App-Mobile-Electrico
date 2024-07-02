import { View, ScrollView } from 'react-native';
import Header from './Header';
import Notificaciones from './Notificaciones';
import MisConsumos from './MisConsumos';
import FacturaElectronica from './FacturaElectronica';
import SimuladorDeConsumo from './SimuladorDeConsumo';
import Mapa from './Mapa';
import Soporte from './Soporte';
import PaginaWeb from './PaginaWeb';
import Reader from './Reader';

const Home = ({ toggleMenu, user }) => {
  return (
    <View className='bg-gray-200 h-full w-full'>
      <View className='mt-10'>
        <Header toggleMenu={toggleMenu} user={user} />
      </View>

      <ScrollView>
        <View>
          <Notificaciones user={user} />
        </View>

        <View>
          <Reader />
        </View>

        <View>
          <MisConsumos user={user} />
        </View>

        <View>
          <FacturaElectronica user={user} />
        </View>
        <View className='flex-row w-full h-36 items-center justify-between px-8'>
          <SimuladorDeConsumo />
          <Mapa />
          <Soporte />
        </View>
        <View>
          <PaginaWeb />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
