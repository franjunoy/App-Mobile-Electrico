import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Main';
import MisConsumos from './src/src-interno/MisConsumos';
import MapaDeCortes from './src/src-interno/MapaDeCortes';
import Calculadora from './src/src-interno/Calculadora';
import PagarFactura from './src/src-interno/PagarFactura';
import ScannerQr from './src/src-interno/ScannerQr';
import Soporte from './src/src-interno/Soporte';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='MisConsumos' component={MisConsumos} />
        <Stack.Screen name='MapaDeCortes' component={MapaDeCortes} />
        <Stack.Screen name='ScannerQr' component={ScannerQr} />
        <Stack.Screen name='PagarFactura' component={PagarFactura} />
        <Stack.Screen name='Calculadora' component={Calculadora} />
        <Stack.Screen name='Soporte' component={Soporte} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
