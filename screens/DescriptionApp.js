import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, } from 'react-native'
import Logo from '../assets/logo.png'
import Onboarding from '../components/Onboarding'

const DescriptionApp = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={Logo}></Image>
                <Text style={styles.textoLogo}>Clima App</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Onboarding />
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.texto}>Empezar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DescriptionApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#51608F",
    },
    descriptionContainer: {
        backgroundColor: "#EDF2F4",
        width: 412,
        height: 500,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    texto: {
        color: "#EDF2F4",
        fontWeight: "bold"
    },
    btn: {
        display: "flex",
        position: "absolute",
        backgroundColor: "#51608F",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        width: 100,
        height: 30,
        bottom: 40,
        // left: 130
        top: 388,
        right: 30

    },
    img: {
        width: 115,
        height: 115
    },
    imgContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        bottom: 20
    },
    textoLogo: {
        color: "#EDF2F4",
        fontWeight: "bold",
        bottom: 10,
        fontSize: 25
    },
})