import { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';
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
      <MisConsumos />
      <FacturaElectronica />
    </View>
    // <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
  );
};

export default Home;
