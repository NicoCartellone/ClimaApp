import React from 'react';
import { StyleSheet } from 'react-native';
import MainStack from './navigation/MainStack'

export default function App() {
  return (
    <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
