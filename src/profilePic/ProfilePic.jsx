import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfilePic = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require('../assets/FotoDePerfil.png')}
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

export default ProfilePic;
