import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import {
  TouchableOpacity,
  GestureHandlerRootView
} from 'react-native-gesture-handler';
import Logo from '../assets/Logo.png';

const Header = (toggleMenu) => {
  return (
    <GestureHandlerRootView>
      <HeaderRNE
        leftComponent={
          <View style={styles.menu}>
            <TouchableOpacity onPress={toggleMenu}>
              <Icon name='menu' color='black' size={35} />
            </TouchableOpacity>
            <Image source={Logo} style={styles.image} />
          </View>
        }
        rightComponent={
          <View style={styles.person}>
            <TouchableOpacity>
              <Icon name='person' color='black' size={35} alignItems='center' />
            </TouchableOpacity>
          </View>
        }
        containerStyle={{
          backgroundColor: '#FFE457',
          height: 70,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      ></HeaderRNE>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10
  }
});

export default Header;
