import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import {
  TouchableOpacity,
  GestureHandlerRootView
} from 'react-native-gesture-handler';

const Header = (toggleMenu) => {
  return (
    <GestureHandlerRootView>
      <HeaderRNE
        leftComponent={
          <View style={styles.menu}>
            <TouchableOpacity onPress={toggleMenu}>
              <Icon name='menu' color='black' size={30} />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <View style={styles.person}>
            <TouchableOpacity>
              <Icon name='person' color='black' size={30} />
            </TouchableOpacity>
          </View>
        }
        containerStyle={{ backgroundColor: '#FFE457', height: 60 }}
      />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default Header;
