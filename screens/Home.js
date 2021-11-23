import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Home = ({ navigation }) => {

    const [ciudad, setciudad] = useState('')

    useEffect(() => {
        obtenerDatosStorage();
    })

    const obtenerDatosStorage = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('ciudad')
            if (jsonValue && JSON.parse(jsonValue) != ciudad) {
                setciudad(JSON.parse(jsonValue))
            }
            console.log(jsonValue, await AsyncStorage.getAllKeys())
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            <Text>{ciudad}</Text>
            <Text style={styles.texto}>hola</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
            >
                <Text>Detalles</Text>
            </TouchableOpacity>
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