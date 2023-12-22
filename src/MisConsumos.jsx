import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MisConsumos = () => {
  return (
    <View style={styles.buttonsContainer}>
      <Button
        buttonStyle={{
          backgroundColor: '#FFE457',
          borderRadius: 5,
          height: 70
        }}
        containerStyle={{
          width: 250,
          marginHorizontal: 50,
          marginVertical: 10
        }}
      >
        <View style={styles.view}>
          <Icon name='plug' size={40} color='black' marginRight={10} />
          <Text style={styles.text}>Mis consumos</Text>
        </View>
        <Icon name='chevron-right' size={25} color='black' marginLeft={25} />
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 0,
    marginRight: 10,
    fontFamily: 'Helvetica-Bold',
    fontSize: 18
  }
});

export default MisConsumos;
