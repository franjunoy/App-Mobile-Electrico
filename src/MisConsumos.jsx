import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MisConsumos = () => {
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
              <View>
                <Icon name='plug' size={40} color='black' marginLeft={55} />
                <Text style={styles.text}>Mis consumos</Text>
              </View>
              <Icon
                name='chevron-right'
                size={25}
                color='black'
                marginRight={10}
              />
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
  text: {
    marginLeft: 15,
    marginRight: 80,
    fontFamily: 'Helvetica-Bold',
    fontSize: 18
  }
});

export default MisConsumos;
