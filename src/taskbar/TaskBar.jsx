import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// eslint-disable-next-line react/prop-types
const TaskBar = ({ isVisible, toggleVisibility }) => {
  return (
    <View style={styles.container}>
      {isVisible && (
        <>
          <TouchableOpacity onPress={toggleVisibility}>
            <Text>X</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Mi Factura</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Mis Pagos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>ChatBot</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Reclamos</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Preguntas Frecuentes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Salir</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    paddingLeft: 25,
    top: -520,
    backgroundColor: 'yellow'
  }
});

export default TaskBar;
