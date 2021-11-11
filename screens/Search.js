import React, { useState, useEffect } from 'react'
import {StyleSheet, ScrollView, View, Text, Keyboard, ImageBackground, TouchableWithoutFeedback, Alert, Image, StatusBar } from 'react-native'
import Formulario from './components/Formulario'
import Clima from './components/Clima'

const Search = () => {

    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
      });
    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});
    const [bgcolor, guardarBgcolor] = useState("#51608F");
    
    const { ciudad, pais } = busqueda;
    
    useEffect(() => {
        const consultarClima = async () => {
          if (consultar) {
            const appId = 'f3e0019459448698b2d30f3b5e803701';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    
            try {
              const respuesta = await fetch(url);
              const resultado = await respuesta.json();
              guardarResultado(resultado);
              guardarConsultar(false);
    
              // Modifica los colores de fondo basado en la temperatura
    
              const kelvin = 273.15;
              const { main } = resultado;
              const actual = main.temp - kelvin;
    
              if (actual < 10) {
                guardarBgcolor('rgb( 105, 108, 149 )');
              } else if (actual >= 10 && actual < 25) {
                guardarBgcolor('rgb(71, 149, 212)');
              } else {
                guardarBgcolor('rgb( 178, 28, 61)');
              }
    
            } catch (error) {
              mostrarAlerta();
            }
          }
        }
        consultarClima();
    }, [consultar]);
    
    const mostrarAlerta = () => {
        Alert.alert(
          'Error',
          'No hay resultados, intenta con otra ciudad o país',
          [{ text: 'OK ' }]
        )
    }
    
    const ocultarTeclado = () => {
        Keyboard.dismiss();
    }
    
    const bgColorApp = {
        backgroundColor: bgcolor
    }

    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            
            <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
                <View style={[styles.app, bgColorApp]}>
                    <View style={styles.contenido}>
                        <Clima
                            resultado={resultado}
                        />
                        <Formulario
                            busqueda={busqueda}
                            guardarBusqueda={guardarBusqueda}
                            guardarConsultar={guardarConsultar}
                        />

                    </View>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#51608F"
    },
    texto: {
        color: "#EDF2F4"
    },
    app: {
        flex: 1,
        justifyContent: 'center'
      },
    contenido: {
        marginHorizontal: '2.5%'
    }
});
