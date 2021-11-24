import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Text } from 'react-native'
import Formulario from '../components/Formulario';
import Clima from '../components/Clima';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Search = ({ navigation }) => {
    const [busqueda, guardarBusqueda] = useState({
        ciudad: "",
        pais: "",
    });
    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});
    const [bgcolor, guardarBgcolor] = useState('#51608F');
    const [ciudadStorage, guardarCiudaStorage] = useState('');
    const { ciudad, pais } = busqueda;

    useEffect(() => {
        const consultarClima = async () => {
            if (consultar) {
                const appId = '6198f7a3843554df52545dfa0dc6ccca';
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

                try {
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    guardarResultado(resultado);
                    guardarConsultar(false);

                    //modifica los colores de fondo basados en la temperatura
                    console.log('valor de ciudad:', ciudad)
                    const kelvin = 273.15;
                    const { main } = resultado;
                    const actual = main.temp - kelvin;

                    if (actual < 10) {
                        guardarBgcolor('#3287c4');
                    } else if (actual >= 10 && actual < 25) {
                        guardarBgcolor('#51608F');
                    } else {
                        guardarBgcolor('#f87070');
                    }

                } catch (error) {
                    mostrarAlerta();
                }
            }
        }
        consultarClima();
        guardarDatos();
        obtenerDatosStorage();
    }, [consultar]);

    const guardarDatos = async () => {
        try {
            const jsonValue = JSON.stringify(ciudad)
            // if ((jsonValue !== null || jsonValue !== undefined) && jsonValue.length > 0) {
            //     await AsyncStorage.setItem('ciudad', jsonValue)
            //     console.log('Guardar item', jsonValue)
            //     guardarCiudaStorage(ciudad)
            // }
            if (ciudad != '') {
                await AsyncStorage.setItem('ciudad', jsonValue)
                guardarCiudaStorage(ciudad)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerDatosStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('ciudad')
            if (jsonValue !== null || jsonValue !== undefined) {
                guardarCiudaStorage(JSON.parse(jsonValue))
            }
            console.log(jsonValue, await AsyncStorage.getAllKeys())
        } catch (error) {
            console.log(error)
        }
    }

    const mostrarAlerta = () => {
        Alert.alert(
            "Error",
            "No hay resultados, intenta con otra ciudad o país",
            [{ text: "OK" }]
        )
    }

    const ocultarTecaldo = () => {
        Keyboard.dismiss();
    }


    const bgColorApp = {
        backgroundColor: bgcolor
    }
    return (
        <>
            <TouchableWithoutFeedback onPress={() => ocultarTecaldo()}>
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
                        <TouchableOpacity
                            onPress={() => navigation.jumpTo('MainTab', ciudadStorage)}
                        >
                            <Text>Guardar Ciudad</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity>
                <Text>Ir al home</Text>
            </TouchableOpacity>
        </>
    );
}

export default Search

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: "center",
    },
    contenido: {
        marginHorizontal: "2.5%"
    }
});
