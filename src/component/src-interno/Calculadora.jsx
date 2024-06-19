import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Button
} from 'react-native';
import AireAcondicionado from '../../../assets/AireAcondicionado.png';
import Anafe from '../../../assets/Anafe.png';
import Aspiradora from '../../../assets/Aspiradora.png';
import Cafetera from '../../../assets/Cafetera.png';
import Calefactor from '../../../assets/Calefactor.png';
import Computadora from '../../../assets/Computadora.png';
import Heladera from '../../../assets/Heladera.png';
import Horno from '../../../assets/Horno.png';
import Iluminacion from '../../../assets/Iluminacion.png';
import Lavarropas from '../../../assets/Lavarropas.png';
import Microondas from '../../../assets/Microondas.png';
import PavaElectrica from '../../../assets/PavaElectrica.png';
import Plancha from '../../../assets/Plancha.png';
import Television from '../../../assets/Television.png';
import Termotanque from '../../../assets/Termotanque.png';
import Ventilador from '../../../assets/Ventilador.png';

const Calculadora = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppliance, setSelectedAppliance] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [hours, setHours] = useState(1);

  const buttonsData = [
    { image: AireAcondicionado, text: 'Aire Acond', consumo: 2000 },
    { image: Anafe, text: 'Anafe', consumo: 1500 },
    { image: Aspiradora, text: 'Aspiradora', consumo: 1000 },
    { image: Cafetera, text: 'Cafetera', consumo: 900 },
    { image: Calefactor, text: 'Calefactor', consumo: 1250 },
    { image: Computadora, text: 'Computadora', consumo: 400 },
    { image: Heladera, text: 'Heladera', consumo: 300 },
    { image: Horno, text: 'Horno', consumo: 2500 },
    { image: Iluminacion, text: 'Iluminacion', consumo: 50 },
    { image: Lavarropas, text: 'Lavarropas', consumo: 1000 },
    { image: Microondas, text: 'Microondas', consumo: 900 },
    { image: PavaElectrica, text: 'Pava Elect', consumo: 1350 },
    { image: Plancha, text: 'Plancha', consumo: 1400 },
    { image: Television, text: 'Television', consumo: 100 },
    { image: Termotanque, text: 'Termotanque', consumo: 2500 },
    { image: Ventilador, text: 'Ventilador', consumo: 50 }
  ];

  const rows = [];
  for (let i = 0; i < buttonsData.length; i += 3) {
    rows.push(buttonsData.slice(i, i + 3));
  }

  const onPressButton = (button) => {
    setSelectedAppliance(button);
    setModalVisible(true);
  };

  const calculateConsumption = () => {
    const consumptionPerDay =
      (selectedAppliance.consumo / 1000) * quantity * hours;
    alert(`El consumo diario estimado es: ${consumptionPerDay.toFixed(2)} kWh`);
  };

  return (
    <ScrollView>
      <View className='p-4'>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} className='flex-row justify-around my-2'>
            {row.map((button, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => onPressButton(button)}
              >
                <View className='h-28 w-28 flex-col items-center border-2 rounded-full p-2 bg-electric-yellow'>
                  <View className='items-center justify-center'>
                    <Image source={button.image} className='w-14 h-14 mt-2' />
                    <Text className='text-center text-sm font-bold'>
                      {button.text}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
        >
          <View className='flex-1 justify-center items-center bg-transparent bg-opacity-50'>
            <TouchableOpacity activeOpacity={1}>
              <View className='w-80 bg-white p-4 rounded-lg border-4'>
                <Text className='text-lg font-bold mb-4'>
                  {selectedAppliance?.text}
                </Text>
                <View className='flex-row items-center justify-between mb-4'>
                  <View className=' w-32'>
                    <Text className='text-lg'>Cantidad de Artefactos</Text>
                  </View>
                  <Button
                    title='-'
                    onPress={() => setQuantity(Math.max(1, quantity - 1))}
                  />
                  <Text className='text-lg'>{quantity}</Text>
                  <Button title='+' onPress={() => setQuantity(quantity + 1)} />
                </View>
                <View className='flex-row items-center justify-between mb-4'>
                  <View className='w-32'>
                    <Text className='text-lg'>Horas de uso </Text>
                  </View>
                  <Button
                    title='-'
                    onPress={() => setHours(Math.max(1, hours - 1))}
                  />
                  <Text className='text-lg'>{hours}</Text>
                  <Button title='+' onPress={() => setHours(hours + 1)} />
                </View>
                <Button
                  title='Calcular consumo'
                  onPress={calculateConsumption}
                />
                <Button
                  title='Cerrar'
                  onPress={() => setModalVisible(false)}
                  color='red'
                  className='mt-2'
                />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
};

export default Calculadora;
