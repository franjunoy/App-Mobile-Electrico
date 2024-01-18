import { StyleSheet, View, Text } from 'react-native';

const Calculadora = () => {
  const buttonsData = [
    'Botón 1',
    'Botón 2',
    'Botón 3',
    'Botón 4',
    'Botón 5',
    'Botón 6',
    'Botón 7',
    'Botón 8',
    'Botón 9',
    'Botón 10',
    'Botón 11',
    'Botón 12'
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
