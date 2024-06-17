import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { ListItem, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  TouchableOpacity,
  GestureHandlerRootView
} from 'react-native-gesture-handler';

const Menu = ({ isOpen, toggleMenu }) => {
  const menuItems = [
    { icon: 'home', text: 'Inicio' },
    { icon: 'money-bill', text: 'Mis Pagos' },
    { icon: 'file-alt', text: 'Factuira Electronica' },
    { icon: 'book-open', text: 'Preguntas Frecuentes' },
    { icon: 'info-circle', text: 'Informacion' },
    { icon: 'cog', text: 'Opciones' }
  ];

  const renderMenuItem = ({ item }) => (
    <ListItem>
      <Icon name={item.icon} color='black' size={25} />
      <TouchableOpacity>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    </ListItem>
  );

  return (
    <GestureHandlerRootView>
      {isOpen && (
        <View>
          <View>
            <View>
              <Text>Cooperativa Eléctrica</Text>
            </View>
            <TouchableOpacity onPress={toggleMenu}>
              <View>
                <Text>X</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View></View>
          <View>
            <Icon name='home' color='black' size={30} marginLeft={10} />
            <TouchableOpacity>
              <Text>Salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </GestureHandlerRootView>
  );
};

export default Menu;
