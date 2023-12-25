import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PaginaWeb = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Icon name='link' size={40} color='black' marginRight={20} />
        <View style={styles.viewText}>
          <Text style={styles.text}>Visita nuestra página web</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: '#FFEB81',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    height: 85,
    width: 305,
    marginHorizontal: 37
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewText: {
    marginRight: 10
  }
});

export default PaginaWeb;
