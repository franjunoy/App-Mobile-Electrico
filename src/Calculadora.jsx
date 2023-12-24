import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FacturaElectronica = () => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        buttonStyle={{
          backgroundColor: 'transparet',
          borderRadius: 5,
          borderColor: 'black',
          borderWidth: 1,
          height: 70
        }}
        containerStyle={{
          width: 100,
          marginHorizontal: 50,
          marginVertical: 10
        }}
      >
        <View style={styles.view}>
          <Icon name='tachometer-alt' size={20} color='black' padding={5} />
          <View style={styles.viewText}>
            <Text style={styles.text}>Simulador </Text>
            <Text style={styles.text}>de Consumo</Text>
          </View>
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20
  },
  view: {
    flexDirection: 'colum',
    alignItems: 'center',
    backgroundColor: '#FFE457',
    borderRadius: 100
  },
  viewText: {
    alignItems: 'center',
    marginRight: 30
  },
  text: {
    alignItems: 'center',
    fontFamily: 'Helvetica-Bold',
    fontSize: 12
  }
});

export default FacturaElectronica;
