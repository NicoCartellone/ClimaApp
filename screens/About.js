import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#51608F"
                barStyle="light-content"
            />
            <Text style={styles.texto}>About Screen</Text>
        </View>
    )
}

export default About

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
