import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

// eslint-disable-next-line react/prop-types
const Logo = ({ toggleTaskBar }) => {
  return (
    <View>
      <TouchableOpacity onPress={toggleTaskBar}>
        <Image
          source={require('../assets/LogoElectrico.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 20
  }
});

export default Logo;
