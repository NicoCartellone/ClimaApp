import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Formulario from '../components/Formulario';
import Clima from '../components/Clima';


//Esta pantalla corresponde a la busqueda de ciudades en particular que no van a quedar almacenadas
const Search = () => {
    const [busqueda, guardarBusqueda] = useState({
        ciudad: "",
        pais: "",
    });
    const [consultar, guardarConsultar] = useState(false);
    const [resultado, guardarResultado] = useState({});
    const [bgcolor, guardarBgcolor] = useState('#51608F');
    const { ciudad, pais } = busqueda;

    //effect con llamado a la api mostrar datos y cambiar el color de la pantalla segun la temperatura obtenida
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
                    console.log(`resultado`, resultado)
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
    }, [consultar]);

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
                </View>
            </View>
        </TouchableWithoutFeedback>
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
