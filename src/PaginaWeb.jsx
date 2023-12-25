import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const PaginaWeb = () => {
  const abrirPaginaWeb = () => {
    const url = 'https://www.celp.com.ar/';
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Icon name='link' size={40} color='black' marginRight={18} />
        <View style={styles.viewText}>
          <Text style={styles.text}>Visita nuestra página web</Text>
          <TouchableOpacity onPress={abrirPaginaWeb}>
            <Text style={styles.link}>https://www.celp.com.ar/</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'colum',
    marginRight: 10
  },
  text: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 15,
    marginBottom: 8
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 16
  }
});

export default PaginaWeb;
