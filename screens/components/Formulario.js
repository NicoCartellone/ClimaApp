import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {

    const { pais, ciudad } = busqueda;

    const [animacionboton] = useState(new Animated.Value(1));

    const consultarClima = () => {
        if (pais.trim() === '' || ciudad.trim() === '') {
            mostrarAlerta();
            return;
        }

        // consultar la api
        guardarConsultar(true)
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error',
            'Agrega ciudad y país',
            [{ text: 'OK ' }]
        )
    }

    const animacionEntrada = () => {
        Animated.spring(animacionboton, {
            toValue: .75
        }).start();
    }

    const animacionSalida = () => {
        Animated.spring(animacionboton, {
            toValue: 1,
            friction: 8,
            tension: 20
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacionboton }]
    }

    return (
        <>
            <View style={styles.formulario}>

                <View
                    style={styles.gral}>
                    <Picker
                        selectedValue={pais}
                        style={styles.picker}
                        onValueChange={pais => guardarBusqueda({ ...busqueda, pais })}
                    >
                        <Picker.Item label="-- Seleccione un país --" value="" />
                        <Picker.Item label="Estados Unidos" value="US" />
                        <Picker.Item label="México" value="MX" />
                        <Picker.Item label="Argentina" value="AR" />
                        <Picker.Item label="Colombia" value="CO" />
                        <Picker.Item label="Costa Rica" value="CR" />
                        <Picker.Item label="España" value="ES" />
                        <Picker.Item label="Perú" value="PE" />
                    </Picker>
                </View>
                <View>
                    <TextInput
                        value={ciudad}
                        style={styles.input}
                        onChangeText={ciudad => guardarBusqueda({ ...busqueda, ciudad })}
                        placeholder="Escriba una Ciudad"
                        placeholderTextColor="#666"
                    />
                </View>

                <View style={styles.botonera}>

                    <TouchableWithoutFeedback
                        onPressIn={() => animacionEntrada()}
                        onPressOut={() => animacionSalida()}
                        onPress={() => consultarClima()}
                    >
                        <Animated.View
                            style={[styles.btnBuscar, estiloAnimacion]}
                        >
                            <Text style={styles.textoBuscar} >Buscar Clima</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        onPressIn={() => animacionEntrada()}
                        onPressOut={() => animacionSalida()}
                        onPress={() => guardarClima()}
                    >
                        <Animated.View
                            style={[styles.btnGuardar, estiloAnimacion]}
                        >
                            <Text style={styles.textoBuscar} >Guardar Ciudad</Text>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    gral: {
        height: 100
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        borderRadius: 12
    },
    btnBuscar: {
        marginTop: 50,
        backgroundColor: '#444',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12,
    },
    btnGuardar: {
        marginTop: 50,
        backgroundColor: '#444',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 12
    },
    textoBuscar: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    },
    formulario: {
        marginTop: '15 %',
    },
    picker: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: '5%',
        marginTop: 20

    },
    botonera: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})

export default Formulario;