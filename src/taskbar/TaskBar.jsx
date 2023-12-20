import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

// eslint-disable-next-line react/prop-types
const TaskBar = ({ isVisible, toggleVisibility }) => {
  return (
    <View style={styles.row}>
      {isVisible && (
        <>
          <TouchableOpacity onPress={toggleVisibility}>X</TouchableOpacity>
          <TouchableOpacity>Mi Factura</TouchableOpacity>
          <TouchableOpacity>Mis Pagos</TouchableOpacity>
          <TouchableOpacity>ChatBot</TouchableOpacity>
          <TouchableOpacity>Reclamos</TouchableOpacity>
          <TouchableOpacity>Preguntas Frecuentes</TouchableOpacity>
          <TouchableOpacity>Salir</TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  taskbar: {
    width: 250,
    height: '100%',
    backgroundColor: '#333',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
    flexDirection: 'column',
    paddingTop: 60
  },
  taskbarButton: {
    borderWidth: 0, // No hay border: none en React Native, se usa borderWidth: 0
    backgroundColor: 'transparent', // 'none' no es válido, 'transparent' se usa en lugar de 'none'
    color: 'white',
    padding: 10,
    textAlign: 'left',
    fontSize: 16,
    cursor: 'pointer' // No hay 'cursor' en React Native
  }
});

export default TaskBar;
