import { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Header from './Header';
import Notificaciones from './Notificaciones';
import MisConsumos from './MisConsumos';
import FacturaElectronica from './FacturaElectronica';
import SimuladorDeConsumo from './SimuladorDeConsumo';
import Mapa from './Mapa';
import Soporte from './Soporte';
import PaginaWeb from './PaginaWeb';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View height='100%' width='100%'>
      <View style={{ paddingBottom: 10 }}>
        <Header toggleMenu={toggleMenu} />
      </View>
      <ScrollView>
        <Notificaciones />
        <MisConsumos />
        <FacturaElectronica />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 38,
            width: 305,
            marginVertical: 10
          }}
        >
          <SimuladorDeConsumo />
          <Mapa />
          <Soporte />
        </View>
        <PaginaWeb />
      </ScrollView>
    </View>
    // <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
  );
};

export default Home;
