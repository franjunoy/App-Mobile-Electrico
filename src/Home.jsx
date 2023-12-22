import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Header from './Header';
import Notificaciones from './Notificaciones';
import MisConsumos from './MisConsumos';
import FacturaElectronica from './FacturaElectronica';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <Header toggleMenu={toggleMenu} />
      <ScrollView>
        <Notificaciones />
        <MisConsumos />
        <FacturaElectronica />
      </ScrollView>
    </View>
    // <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
  );
};

export default Home;
