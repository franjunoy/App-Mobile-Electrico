import { View, ScrollView, Text } from 'react-native';
import Header from './Header';
import Notificaciones from './Notificaciones';
import MisConsumos from './MisConsumos';
import FacturaElectronica from './FacturaElectronica';
import SimuladorDeConsumo from './SimuladorDeConsumo';
import Mapa from './Mapa';
import Soporte from './Soporte';
import PaginaWeb from './PaginaWeb';
import Reader from './Reader';

const Home = ({ toggleMenu }) => {
  return (
    <View>
      <View className='top-10'>
        <Header toggleMenu={toggleMenu} />
      </View>
      <ScrollView>
        <View className='top-10'>
          <Notificaciones />
        </View>
        {/* <Reader />
        <MisConsumos />
        <FacturaElectronica />
        <View>
          <SimuladorDeConsumo />
          <Mapa />
          <Soporte />
        </View>
        <PaginaWeb /> */}
      </ScrollView>
    </View>
  );
};

export default Home;