import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Home from './Home';
import Menu from './Menu';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View className='flex-1 mt-24'>
      <View className='flex-1'>
        <Home toggleMenu={toggleMenu} />
        {isOpen && (
          <View style={StyleSheet.absoluteFill}>
            <Menu isOpen={isOpen} toggleMenu={toggleMenu} />
          </View>
        )}
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

export default Main;
