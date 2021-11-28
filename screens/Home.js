import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../components/Container';

const Home = ({ navigation, route }) => {
    const contador = route.params
    console.log('contador', contador)

    const [datosStorage, setdatosStorage] = useState([])
    const [datosFiltrados, setDatosFiltrados] = useState([])
    console.log(`datosFlitrados`, datosFiltrados)

    useEffect(() => {
        getData()
    }, [contador])

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('datosFormulario')
            setdatosStorage(JSON.parse(jsonValue))
            console.log('Esto se ejecuta')

        } catch (error) {
            console.log(error)
        }
    }

    //Elimina las ciudades del state
    const eliminarCiudad = async (id) => {
        const ciudadesFiltradas = datosStorage.filter(datosStorage => datosStorage.id !== id);
        setdatosStorage(ciudadesFiltradas);
        const json_value = JSON.stringify(ciudadesFiltradas)
        await AsyncStorage.setItem('datosFormulario', json_value)
    }

    const filtrarBusqueda = (texto) => {
        console.log(`texto`, texto)
        const textoInput = texto.toUpperCase()
        for (let ciudades of datosStorage) {
            let ciudad = ciudades.ciudad.toUpperCase();
            if (ciudad.indexOf(textoInput) !== -1) {
                setDatosFiltrados(ciudades)
            }
        }
        // const busquedaFiltrada = datosStorage.filter(datosStorage => datosStorage.ciudad === texto)
        // setDatosFiltrados(busquedaFiltrada)
    }

    let texto = 'inicializacion'
    return (
        <Container>
            <StatusBar
                animated={true}
                backgroundColor="#192f6a"
                barStyle="light-content"
            />
            <View style={styles.buscadorContainer}>
                <View style={styles.containerBtnInput}>
                    <TextInput
                        style={styles.buscador}
                        placeholder="Busque una ciudad"
                        placeholderTextColor="#666"
                        textAlign="center"
                        onChangeText={(texto) => filtrarBusqueda(texto)}

                    />
                    <TouchableOpacity
                        style={styles.btnBuscar}>
                        <MaterialCommunityIcons name="magnify" color={"black"} size={26}></MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={datosStorage}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.flatListContainer}>
                        <View style={styles.containerText}>
                            <Text style={styles.textFlatList}>{item.ciudad}</Text>
                        </View>
                        <View style={styles.containerBtns}>
                            <TouchableOpacity
                                style={styles.btnBuscador}
                                onPress={() => eliminarCiudad(item.id)}>
                                <MaterialCommunityIcons name="delete" color={"red"} size={20}></MaterialCommunityIcons>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btnBuscador}
                                onPress={() => navigation.navigate('Details', item)}>
                                <MaterialCommunityIcons name="plus-box-multiple" color={"#5B5A5A"} size={20}></MaterialCommunityIcons>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <Text style={{ bottom: 150 }}>{datosFiltrados}</Text>
            <TouchableOpacity
                style={styles.btnAgregarCiudad}
                onPress={() => navigation.navigate('Form')}>
                <MaterialCommunityIcons name="plus" color={"#51608F"} size={26}></MaterialCommunityIcons>
            </TouchableOpacity>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#51608F"
    },
    textFlatList: {
        marginRight: 10,
        textTransform: "lowercase"
    },
    flatListContainer: {
        backgroundColor: "#EDF2F4",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        height: 30,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    buscadorContainer: {
        marginTop: 40,
    },
    buscador: {
        height: 40,
        width: 300,
        left: 7,
        backgroundColor: "#ffff",
        marginHorizontal: 10,
        borderRadius: 15,

    },
    btnBuscar: {
        right: 50,
        backgroundColor: "#ffff",
        zIndex: 100
    },
    containerBtnInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10
    },
    containerText: {
        justifyContent: "flex-start",
        marginHorizontal: 40,
    },
    btnBuscador: {
        marginHorizontal: 5
    },
    containerBtns: {
        flexDirection: "row",
        marginHorizontal: 40
    },
    btnAgregarCiudad: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 70,
        right: 15,
        backgroundColor: "#EDF2F4",
        borderRadius: 100,
        width: 40,
        height: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
})
