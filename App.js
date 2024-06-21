import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/component/Main';
import MisConsumos from './src/component/src-interno/MisConsumos';
import MapaDeCortes from './src/component/src-interno/MapaDeCortes';
import Calculadora from './src/component/src-interno/Calculadora';
import PagarFactura from './src/component/src-interno/PagarFactura';
import ScannerQr from './src/component/src-interno/ScannerQr';
import Soporte from './src/component/src-interno/Soporte';
import Perfil from './src/component/src-interno/Perfil';
import Notificaciones from './src/component/src-interno/Notificaciones';
import Login from './src/component/Login';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
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
        <Stack.Screen name='Perfil' component={Perfil} />
        <Stack.Screen name='Notificaciones' component={Notificaciones} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
