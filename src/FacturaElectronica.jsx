import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const FacturaElectronica = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.contentView}>
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
              <Icon name='receipt' size={30} color='black' />
              <Text style={styles.textStyle}>Factura electronica</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20
  },
  textStyle: { marginLeft: 10 }
});

export default FacturaElectronica;
