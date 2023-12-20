import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Logo from '../logo/Logo';
import ProfilePic from '../profilePic/ProfilePic';

const Nav = ({ toggleTaskBar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Logo toggleTaskBar={toggleTaskBar} />
        <View style={styles.spacer} />
        <ProfilePic />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 25
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20
  },
  spacer: {
    width: 250
  }
});

export default Nav;
