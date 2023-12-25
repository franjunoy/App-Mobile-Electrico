import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FacturaElectronica = () => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        buttonStyle={{
          backgroundColor: '#FFEB81',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#d9d9d9',
          height: 80,
          width: 305,
          marginHorizontal: 50
        }}
      >
        <View style={styles.view}>
          <Icon name='receipt' size={40} color='black' marginRight={20} />
          <View style={styles.viewText}>
            <Text style={styles.text}>Factura </Text>
            <Text style={styles.text}>electronica</Text>
          </View>
        </View>
        <Icon name='chevron-right' size={25} color='black' marginLeft={40} />
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
    marginVertical: 10
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewText: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 30
  },
  text: {
    marginLeft: 0,

    fontFamily: 'Helvetica-Bold',
    fontSize: 18
  }
});

export default FacturaElectronica;
