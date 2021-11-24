import React from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'


export default OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions();
    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.8 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 10,
        color: '#51608F',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#5B5A5A',
        textAlign: "center",
        paddingHorizontal: 64,
    }
})
