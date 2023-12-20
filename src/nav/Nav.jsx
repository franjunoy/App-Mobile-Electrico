import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header as HeaderRNE, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Nav = ({ toggleTaskBar }) => {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <HeaderRNE
          leftComponent={() => (
            <TouchableOpacity onPress={toggleTaskBar}>
              <Icon name='menu' color='#fff' />
            </TouchableOpacity>
          )}
          rightComponent={
            <View>
              <TouchableOpacity>
                <Icon name='photo' color='white' />
              </TouchableOpacity>
            </View>
          }
        />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({});

export default Nav;
