import { useState } from 'react';
import Head from '../head/Head';
import Menu from '../menu/Menu';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View>
      <Head toggleMenu={toggleMenu} />
      <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
    </View>
  );
};

export default Home;
