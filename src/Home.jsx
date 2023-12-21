import { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <Header toggleMenu={toggleMenu} />
    </View>
    // <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
  );
};

export default Home;
