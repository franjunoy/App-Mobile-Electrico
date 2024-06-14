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
    <View>
      <View>
        <Icon name='link' size={40} color='black' marginRight={16} />
        <View>
          <Text>Visita nuestra página web</Text>
          <TouchableOpacity onPress={abrirPaginaWeb}>
            <Text>https://www.celp.com.ar/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PaginaWeb;
