import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Animated } from 'react-native';
import MainStack from './navigation/MainStack';
import Logo from './assets/logo.png';


export default function App() {
  const [animated, setanimated] = useState(false);
  const [rotate] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(rotate, {
      toValue: 1080,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => setanimated(true))
  }, []);

  const interpolate = rotate.interpolate({
    inputRange: [0, 1080],
    outputRange: ['0deg', '1080deg']
  });

  const styleAnimated = {
    transform: [{ rotate: interpolate }]
  }
  if (!animated)
    return (
      <>
        <StatusBar
          animated={true}
          backgroundColor="#51608F"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <Animated.Image style={[styles.image, styleAnimated]} source={Logo}></Animated.Image>
          <Text style={styles.texto}>Clima App</Text>
        </View>
      </>
    );
  return (

    <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#51608F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  }
});
