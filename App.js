import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Route, Switch } from 'react-router-native';
import Main from './src/Main';
import MisConsumos from './src/src-interno/MisConsumos';
import MapaDeCortes from './src/src-interno/MapaDeCortes';

export default function App() {
  return (
    <View style={styles.container}>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/misconsumos' exact>
          <MisConsumos />
        </Route>
        <Route path='/factura' exact>
          <Text>Veras tu factura</Text>
        </Route>
        <Route path='/calculadora' exact>
          <Text>Aca va la calculadora</Text>
        </Route>
        <Route path='/mapa' exact>
          <MapaDeCortes />
        </Route>
        <Route path='/soporte' exact>
          <Text>Ayuda o soporte</Text>
        </Route>
      </Switch>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
