import React from 'react';
import { View, StyleSheet, FlatList, Image, Text } from 'react-native';
import { ListItem, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Logo from '../assets/Logo.png';
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
        <Text fontFamily='Helvetica-Bold' fontSize={10}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </ListItem>
  );

  return (
    <GestureHandlerRootView>
      {isOpen && (
        <View style={styles.menuContainer}>
          <View
            flexDirection='row'
            alignItems='center'
            backgroundColor='#FFEB81'
            width='auto'
            height={60}
          >
            <Image source={Logo} style={styles.image} />
            <View flexDirection='colum' marginRight={47} marginLeft={7}>
              <Text fontFamily='Helvetica-Bold' fontSize={10}>
                Cooperativa Eléctrica
              </Text>
              <Text fontFamily='Helvetica-Bold' fontSize={10}>
                Pergamino
              </Text>
            </View>
            <TouchableOpacity onPress={toggleMenu}>
              <View
                style={{
                  marginBottom: 25,
                  padding: 1
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Helvetica-Bold',
                    fontSize: 25,
                    color: 'black'
                  }}
                >
                  X
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <FlatList
            data={menuItems}
            renderItem={renderMenuItem}
            width='auto'
            height='auto'
            marginVertical={50}
          ></FlatList>
          <View width='auto' height={50}></View>
          <View
            flexDirection='row'
            alignItems='center'
            backgroundColor='#FFEB81'
            width='auto'
            height={60}
          >
            <Icon name='home' color='black' size={30} marginLeft={10} />
            <TouchableOpacity>
              <Text
                fontFamily='Helvetica-Bold'
                style={{ fontSize: 20 }}
                marginLeft={10}
              >
                Salir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: 270,
    height: 640,
    backgroundColor: 'white',
    borderColor: '#d9d9d9',
    borderWidth: 1
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 10
  }
});

export default Menu;
