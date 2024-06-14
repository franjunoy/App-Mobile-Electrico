import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const MisConsumos = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button onPress={() => navigation.navigate('MisConsumos')}>
        <View>
          <Icon name='plug' size={40} color='black' marginRight={20} />
          <Text>Mis consumos</Text>
        </View>
        <Icon name='chevron-right' size={25} color='black' marginLeft={40} />
      </Button>
    </View>
  );
};

export default MisConsumos;
