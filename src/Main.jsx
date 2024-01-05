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
    <View style={styles.container}>
      <View style={styles.layer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  layer: {
    flex: 1
  }
});

export default Main;
