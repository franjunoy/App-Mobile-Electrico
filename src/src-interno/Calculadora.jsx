import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Calculadora = () => {
  const buttonsData = [
    <Icon
      name='desktop'
      size={10}
      color='black'
      justifyContent='center'
      alignItems='center'
    />,
    <Icon
      name='laptop'
      size={10}
      color='black'
      justifyContent='center'
      alignItems='center'
    />,
    <Icon
      name='map-marked-alt'
      size={10}
      color='black'
      justifyContent='center'
      alignItems='center'
    />,
    <Icon
      name='map-marked-alt'
      size={10}
      color='black'
      justifyContent='center'
      alignItems='center'
    />,
    <Icon
      name='map-marked-alt'
      size={10}
      color='black'
      justifyContent='center'
      alignItems='center'
    />,
    <Icon
      name='map-marked-alt'
      size={10}
      color='black'
      justifyContent='center'
      alignItems='center'
    />,
    <Icon name='map-marked-alt' size={10} color='black' />,
    <Icon name='map-marked-alt' size={10} color='black' />,
    <Icon name='map-marked-alt' size={10} color='black' />,
    <Icon name='map-marked-alt' size={10} color='black' />,
    <Icon name='map-marked-alt' size={10} color='black' />,
    <Icon name='map-marked-alt' size={10} color='black' />
  ];

  return (
    <View>
      {buttonsData.map((buttonText, index) => (
        <TouchableOpacity key={index} onPress={() => onPressButton(buttonText)}>
          <Text>{buttonText}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Calculadora;
