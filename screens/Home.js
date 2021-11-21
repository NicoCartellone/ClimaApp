import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = ({ route }) => {

    const ciudad = route.params
    console.log(ciudad)
    // const [ciudadStorage, guardarCiudadStorage] = useState('');
    // // console.log('datos desde home:', route.params)

    // useEffect(() => {
    //     const guardarDatos = async () => {
    //         try {
    //             await AsyncStorage.setItem('ciudad', ciudad)
    //         } catch (error) {
    //             AsyncStorage.removeItem('ciudad')
    //             console.log(error)
    //         }
    //     }
    //     const obtenerDatos = async () => {
    //         try {
    //             const storageCiudad = await AsyncStorage.getItem('ciudad')
    //             guardarCiudadStorage(storageCiudad)
    //             console.log(storageCiudad)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     guardarDatos();
    //     obtenerDatos();
    // }, [])


    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            <Text>{ciudad}</Text>
            <Text style={styles.texto}>hola</Text>
        </View>
    )
}



export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#51608F"
    },
    texto: {
        color: "#EDF2F4"
    }
});