import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
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
  const buttonsData = [
    { image: AireAcondicionado, text: 'Aire Acond' },
    { image: Anafe, text: 'Anafe' },
    { image: Aspiradora, text: 'Aspiradora' },
    { image: Cafetera, text: 'Cafetera' },
    { image: Calefactor, text: 'Calefactor' },
    { image: Computadora, text: 'Computadora' },
    { image: Heladera, text: 'Heladera' },
    { image: Horno, text: 'Horno' },
    { image: Iluminacion, text: 'Iluminacion' },
    { image: Lavarropas, text: 'Lavarropas' },
    { image: Microondas, text: 'Microondas' },
    { image: PavaElectrica, text: 'Pava Electrica' },
    { image: Plancha, text: 'Plancha' },
    { image: Television, text: 'Television' },
    { image: Termotanque, text: 'Termotanque' },
    { image: Ventilador, text: 'Ventilador' }
  ];

  const onPressButton = (text) => {
    // Aquí puedes agregar la lógica que quieras ejecutar cuando se presione el botón
    console.log(text);
  };

  const renderButtons = () => {
    let rows = [];
    for (let i = 0; i < buttonsData.length; i += 3) {
      rows.push(
        <View key={i} className='flex-row justify-around my-2'>
          {buttonsData.slice(i, i + 3).map((button, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => onPressButton(button.text)}
            >
              <View className=' h-28 w-28 flex-col items-center border rounded-full p-2 bg-electric-yellow'>
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
      );
    }
    return rows;
  };

  return <View className='p-4'>{renderButtons()}</View>;
};

export default Calculadora;
