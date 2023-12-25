import React from 'react';
import { View, StyleSheet, Text, ListItem } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Menu = () => {
  return (
    <View height='100%' width='40%' position='absolute'>
      <Button>X</Button>
      <ListItem>
        <Icon name='home' color='black' />
        <Text>Inicio</Text>
        <Icon name='money-bill' color='black' />
        <Text>Mis Pagos</Text>
        <Icon name='file-alt' color='black' />
        <Text>Factuira Electronica</Text>
        <Icon name='book-open' color='black' />
        <Text>Preguntas Frecuentes</Text>
        <Icon name='info-circle' color='black' />
        <Text>Informacion</Text>
        <Icon name='cog' color='black' />
        <Text>Opciones</Text>

        <Icon name='home' color='black' />
        <Text>Salir</Text>
      </ListItem>
    </View>
  );
};

export default Menu;
