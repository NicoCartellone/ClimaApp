import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../components/Container';

const Home = ({ navigation, route }) => {
    const contador = route.params

    //datosStorage contiene el array con los datos que se guardaron en el storage
    //filterDatosStorage contiene los datos de storage duplicados para filtralos en una funcion
    //search captura el input de la barra de busqueda
    const [datosStorage, setdatosStorage] = useState([])
    const [filterDatosStorage, setFilterDatosStorage] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        getData()
    }, [contador])

    //se obtiene la data del storage
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('datosFormulario')
            setdatosStorage(JSON.parse(jsonValue))
            setFilterDatosStorage(JSON.parse(jsonValue))

        } catch (error) {
            console.log(error)
        }
    }

    //Elimina las ciudades del state
    const eliminarCiudad = async (id) => {
        const ciudadesFiltradas = filterDatosStorage.filter(filterDatosStorage => filterDatosStorage.id !== id);
        setFilterDatosStorage(ciudadesFiltradas);
        const json_value = JSON.stringify(ciudadesFiltradas)
        await AsyncStorage.setItem('datosFormulario', json_value)
    }
    //funcion utilizada en el buscador para filtrar y mostar resultados
    const searchFilter = (text) => {
        if (text) {
            const newData = datosStorage.filter((item) => {
                const itemData = item.ciudad ? item.ciudad.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterDatosStorage(newData);
            setSearch(text);
        } else {
            setFilterDatosStorage(datosStorage);
            setSearch(text);
        }
    }

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
                        value={search}
                        placeholder="Busque una ciudad"
                        placeholderTextColor="#666"
                        underlineColorAndroid="transparent"
                        textAlign="center"
                        onChangeText={(text) => searchFilter(text)}

                    />
                    <MaterialCommunityIcons style={styles.btnBuscar} name="magnify" color={"#666"} size={26}></MaterialCommunityIcons>
                </View>
            </View>
            <View style={styles.contain}>
                <FlatList
                    data={filterDatosStorage}
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
                <TouchableOpacity
                    style={styles.btnAgregarCiudad}
                    onPress={() => navigation.navigate('Form')}>
                    <MaterialCommunityIcons name="plus" color={"#51608F"} size={26}></MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    contain: {
        height: "80%",
        marginBottom: 50,
        //marginLeft: 20
    },
    textFlatList: {
        marginRight: 10,
        textTransform: "uppercase",
        fontSize: 13,
        fontWeight: "bold"
    },
    flatListContainer: {
        backgroundColor: "#EDF2F4",
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        height: 40,
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
        marginBottom: "8%"
    },
    buscador: {
        height: 30,
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
        top: "3%",
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
        marginRight: "7%"
    },
    btnAgregarCiudad: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 20,
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
