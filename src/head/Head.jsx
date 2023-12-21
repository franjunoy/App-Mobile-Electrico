import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Head = ({ toggleMenu }) => {
  return (
    <SafeAreaProvider>
      <HeaderRNE
        leftComponent={{
          icon: 'menu',
          color: '#fff'
        }}
        rightComponent={
          <View style={styles.headerRight}>
            <Icon name='image' color='white' />
          </View>
        }
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold'
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Head;
