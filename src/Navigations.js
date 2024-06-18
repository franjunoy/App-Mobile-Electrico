import Main from './component/Main';
import MisConsumos from './component/src-interno/MisConsumos';
import MapaDeCortes from './component/src-interno/MapaDeCortes';
import Calculadora from './component/src-interno/Calculadora';
import PagarFactura from './component/src-interno/PagarFactura';
import ScannerQr from './component/src-interno/ScannerQr';
import Soporte from './component/src-interno/Soporte';
import Perfil from './component/src-interno/Perfil';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
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
      <Stack.Screen name='Perfil' component={Perfil} />
    </Stack.Navigator>
  );
};
export default Navigator;
