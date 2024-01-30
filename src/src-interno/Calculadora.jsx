import { StyleSheet, View, Text, Image } from 'react-native';
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
    <View style={styles.container}>
      {buttonsData.map((buttonText, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => onPressButton(buttonText)}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  button: {
    width: '30%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3498db',
    marginVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});

export default Calculadora;
