import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Modal, Dimensions, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../components/Container';


const Details = ({ navigation, route }) => {
    const ciudad = route.params.ciudad
    const pais = route.params.pais

    const [temperatura, setTemperatura] = useState('')
    const [latitud, setLatitud] = useState(0)
    const [longitud, setLongitud] = useState(0)
    const [view, setView] = useState(false)
    const kelvin = 273.15
    const tempActual = parseInt(temperatura - kelvin)
    const [resultado, guardarResultado] = useState({});
    const [icon, setIcon] = useState('')
    const [feelslike, setfeelslike] = useState('')
    const fellsActual = parseInt(feelslike - kelvin)

    useEffect(() => {
        const consultaApi = async () => {
            const appId = 'fecc0c6fa885693e71d3ddb065315543';
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
            try {
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                guardarResultado(resultado);
                setLatitud(resultado.coord.lat)
                setLongitud(resultado.coord.lon)
                setTemperatura(resultado.main.temp)
                setIcon(resultado.weather[0].icon)
                setfeelslike(resultado.main.feels_like)
            } catch (error) {

            }
        }
        consultaApi();
    }, [])

    return (
        <Container>
            <TouchableOpacity
                style={styles.btnVolver}
                onPress={() => navigation.goBack()}
            >
                <MaterialCommunityIcons name="arrow-left" color={"white"} size={26}></MaterialCommunityIcons>
            </TouchableOpacity>
            <View style={styles.contain}>
                <Text style={styles.ciudad}>{ciudad}</Text>
                <View style={styles.containerTemp}>
                    <Text style={styles.tempActual}> {tempActual} &#x2103;</Text>
                    <Image
                        style={{ width: 66, height: 58 }}
                        source={{ uri: `http://openweathermap.org/img/w/${icon}.png` }}
                    />
                </View>
                <Text style={styles.fellsActual}>{fellsActual} &#x2103;</Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => { setView(true) }}
                >
                    <Text style={styles.btnText}>Abrir Mapa</Text>
                </TouchableOpacity>

                <Modal
                    animationType="fade"
                    onDismiss={() => console.log(`close`)}
                    onShow={() => { latitud, longitud }}
                    transparent
                    visible={view}
                >
                    <View style={{ flex: 1, backgroundColor: 'rgba(1,1,1,0.5)', justifyContent: "center", alignItems: "center" }}>
                        <View style={{ height: '75%', width: '90%', backgroundColor: "#fff" }}>
                            <MapView

                                style={styles.map}
                                initialRegion={{
                                    latitude: latitud,
                                    longitude: longitud,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >
                                <Marker
                                    coordinate={{
                                        latitude: latitud,
                                        longitude: longitud
                                    }}
                                    title={ciudad}
                                    description={pais}
                                />
                            </MapView>
                            <TouchableOpacity style={styles.btnModal} onPress={() => { setView(false) }}>
                                <MaterialCommunityIcons name="arrow-left" color={"black"} size={26}></MaterialCommunityIcons>
                                <Text style={styles.btnTextoModal}>Volver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </Container>
    )
}

export default Details

const styles = StyleSheet.create({
    contain: {
        alignItems: "center"
    },
    btn: {
        // flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center"

    },
    btnVolver: {
        display: "flex",
        position: "absolute",
        top: 15,
        left: 5
    },
    btnText: {
        color: "white",
        fontSize: 18
    },
    map: {
        width: Dimensions.get('window').width,
        height: '100%',
        width: "100%",
    },
    btnModal: {
        display: "flex",
        position: "absolute",
        zIndex: 100,
        marginLeft: 10,
        marginTop: 10,
    },
    btnTextoModal: {
        fontWeight: "bold"
    },
    fellsActual: {

    },
    ciudad: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    tempActual: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    },
    containerTemp: {
        flexDirection: "row",


    }
})
